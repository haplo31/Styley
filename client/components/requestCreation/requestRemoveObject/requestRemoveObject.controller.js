'use strict';

angular.module('styleyApp')
  .controller('RequestRemoveObjectCtrl', function ($scope) {
    $scope.message = 'Hello';
  }).controller('remObjCtrl', function ($scope,$timeout,$http,Auth,Upload,$modalInstance) {
    $scope.isLoggedIn = Auth.isLoggedIn
	console.log(Auth.isLoggedIn())
    $scope.step=1;
    $scope.completedStep=1;
	$scope.sliderSrc1 = '../../../assets/images/remObj1.png';
  	$scope.sliderSrc2 = '../../../assets/images/remObj2.png';	
  	$timeout(function(){$('.slider').slider(); }, 200);
		
    $scope.nextStep = function(){
      $scope.step++;
    };
    
    $scope.previousStep = function(){
      $scope.step--;
    };

        $scope.loadFiles = function(file, errFiles) {
      if (file){
        $scope.imageAsk=true;
        $scope.file = file;
      }
    };

    $scope.btnPlaced = [];
    $scope.btnCurrent = [];
    var posTop,posLeft,imgWidth,imgHeight;
    
    $scope.select= function(color){
      $scope.redPointer = true;
      return false;
    }

    $scope.clickOnImg = function(event){
      if ($scope.redPointer === true){
        posTop = event.offsetY;
        posLeft =  event.offsetX;
        imgWidth = angular.element(document.querySelector('#picturezone')).prop('width');
        imgHeight = angular.element(document.querySelector('#picturezone')).prop('height');
        $scope.btnPlaced.push({'posTop': posTop,'posLeft': posLeft,'width': imgWidth, 'height': imgHeight});
        
        $scope.btnCurrent.push({'posTop': angular.element(document.querySelector('#picturezone')).prop('offsetTop') + posTop, 
          'posLeft': angular.element(document.querySelector('#picturezone')).prop('offsetLeft') + posLeft});

        $scope.redPointer = false;
        if ($scope.completedStep<2)
          $scope.completedStep = 2;
      }
    };
    
    $scope.removePlaced = function(index){
      $scope.btnPlaced.splice(index,1);
      $scope.btnCurrent.splice(index,1);
      if ($scope.btnPlaced.length === 0){
        $scope.completedStep=1;
      }
    };

    $scope.qualityMessages=["A good quality for social networks or mobile wallpapers but the editing may be visible up close.",
                            "The best quality for goodies or printing ! The editing will be very nice, and only a close examination will reveal it.",
                            "Even a professionnal eye may have trouble to see where the editing occured! It's a quality for 4X4 meters panels or if you don't like compromises."]
    $scope.radioModel=0;
    //$scope.qualityMessage= $scope.qualityMessages[1]
    $scope.quaselect=function(radio){
      $scope.completedStep=3;
      if(radio==="Good"){
        $scope.qualityMessage=$scope.qualityMessages[0]
      }
      else if (radio==="Excellent"){
        $scope.qualityMessage=$scope.qualityMessages[1]
      }
      else if (radio==="Perfect"){
        $scope.qualityMessage=$scope.qualityMessages[2]
      }
    };

       var basePrice;
    var unitModPrice;
    var quaPrice=[];
    var reputPrice=[];
    $http.get('/api/getprice/remPers').success(function(price) {
        basePrice = price.basePrice;
        unitModPrice = price.unitModPrice;
        quaPrice = price.quaPrice;
        reputPrice = price.reputPrice;
      });   

    var finalPrices = [];                         
    $scope.estimatePrice=function(){
      var tempPrice=basePrice;
      finalPrices = [];
      tempPrice += (tempPrice*unitModPrice)*($scope.btnPlaced.length-1)
      if ($scope.radioModel==="Excellent"){
        tempPrice += (tempPrice*quaPrice[1])
      }
      else if ($scope.radioModel==="Perfect"){
        tempPrice += (tempPrice*quaPrice[2])
      }
      if ($scope.noratingSelected){
        finalPrices.push(parseInt(tempPrice,10));
      }
      if ($scope.bronzeratingSelected){
        finalPrices.push(parseInt(tempPrice + (tempPrice*reputPrice[0]),10))
      }
      if ($scope.silverratingSelected){
        finalPrices.push(parseInt(tempPrice + (tempPrice*reputPrice[1]),10))
      }
      if ($scope.goldratingSelected){
        finalPrices.push(parseInt(tempPrice + (tempPrice*reputPrice[2]),10))
      }
      if (finalPrices.length>1){
        $scope.estimatedPrice= finalPrices[0]+"-"+finalPrices[finalPrices.length-1]+"€";
        $scope.priceSelected=true;
      }
      else if (finalPrices.length>0){
        $scope.estimatedPrice=finalPrices[0]+"€";
        $scope.priceSelected=true;
      }
      else{
        $scope.priceSelected=false;
      }
    };

    $scope.$watchGroup(['btnPlaced', 'radioModel','btnPlaced|json'], function(newValues, oldValues, scope) {
      $scope.estimatePrice();
    }); 






    $scope.submitRequest = function(){
      var ratingSelected = []
      if ($scope.noratingSelected){
        ratingSelected.push(0)
      }
      if ($scope.bronzeratingSelected){
        ratingSelected.push(1)
      }
      if ($scope.silverratingSelected){
        ratingSelected.push(2)
      }
      if ($scope.goldratingSelected){
        ratingSelected.push(3)
      }
      Upload.upload({
          url: 'api/updatefile',
          data: {file:$scope.file}
      }).then(function (resp) {
          $http.post('/api/qqrequests/',{ owner:Auth.getCurrentUser().name,
                                        artist:"",
                                        modtype:"remObj",
                                        vote:0,
                                        src:resp.data.filename,
                                        modinfos:$scope.btnPlaced,
                                        addinfos:$scope.addInfos,
                                        quality:$scope.radioModel,
                                        rating:ratingSelected,
                                        price: finalPrices,
                                        available:"true"})
          .success(function(){
            $modalInstance.close();
          });      
      }, function (resp) {
          console.log('Error status: ' + resp.status);
      }, function (evt) {
          var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
          console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
      });
    }



    $scope.$watch('step', function (value) {
      $timeout(function(){
        if (value==3){
          var ratioImg=angular.element(document.querySelector('#picturerecap')).prop('width')/$scope.btnPlaced[0].width;   
          $scope.btnRecap = [];
          for (var i = 0; i < $scope.btnPlaced.length; i++) {
            // TODO: pbm to catch the left position...
            posTop = angular.element(document.querySelector('#picturerecap')).prop('offsetTop') + $scope.btnPlaced[i].posTop*ratioImg-24;
            posLeft = angular.element(document.querySelector('#picturerecap')).prop('offsetLeft') + $scope.btnPlaced[i].posLeft*ratioImg-24;
            $scope.btnRecap.push( {'posTop': posTop, 'posLeft':posLeft});
          };
        }}, 100);  
    });

});
