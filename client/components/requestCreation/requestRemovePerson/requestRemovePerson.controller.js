'use strict';

angular.module('styleyApp')
  .controller('RequestRemovePersonCtrl', function ($scope,) {
    $scope.message = 'Hello';
  })
  .controller('CreaInstanceCtrl', function ($scope,$timeout,$http) {
		
    $scope.step=1;
    $scope.completedStep=1;
		$scope.sliderSrc1 = '../../../assets/images/rem1.png';
  	$scope.sliderSrc2 = '../../../assets/images/rem2.png';	
  	$timeout(function(){$('.slider').slider(); }, 100);
		
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
        console.log(angular.element(document.querySelector('#picturezone')).prop('offsetLeft'))
        console.log(event.offsetX)
        posTop = event.offsetY;
        posLeft =  event.offsetX;
        imgWidth = angular.element(document.querySelector('#picturezone')).prop('width');
        imgHeight = angular.element(document.querySelector('#picturezone')).prop('height');
        $scope.btnPlaced.push({'posTop': posTop,'posLeft': posLeft,'width': imgWidth, 'height': imgHeight});
        
        $scope.btnCurrent.push({'posTop': angular.element(document.querySelector('#picturezone')).prop('offsetTop') + posTop, 
          'posLeft': angular.element(document.querySelector('#picturezone')).prop('offsetLeft') + posLeft});

        console.log(posTop);
        console.log(posLeft);
        console.log(imgWidth);
        console.log(imgHeight);
        console.log("");
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
    }  

    var basePrice;
    var unitModPrice;
    var quaPrice=[];
    var reputPrice=[];
    $http.get('/getprice/remPers').success(function(price) {
        basePrice = price.basePrice;
        unitModPrice = price.unitModPrice;
        quaPrice = price.quaPrice;
        reputPrice = price.reputPrice;
      });   

    var finalPrices = [];                         
    $scope.estimatePrice=function(){
      var tempPrice=basePrice;
      console.log(tempPrice);
      finalPrices = [];
      tempPrice += (tempPrice*unitModPrice)*($scope.btnPlaced.length-1)
      console.log(tempPrice);
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
        $scope.estimatedPrice= finalPrices[0]+"-"+finalPrices[finalPrices.length-1]+"€"
      }
      else{
        $scope.estimatedPrice=finalPrices[0]+"€"
      }
    } 

    $scope.$watchGroup(['btnPlaced', 'radioModel','btnPlaced|json'], function(newValues, oldValues, scope) {
      $scope.estimatePrice();
    }); 

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

  })