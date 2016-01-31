'use strict';

angular.module('styleyApp')
  .controller('RequestIncrustationCtrl', function ($scope) {
    $scope.message = 'Hello';
  }).controller('incrustCtrl', function ($scope,$timeout,$http,Auth,Upload,$modalInstance) {
    $scope.isLoggedIn = Auth.isLoggedIn
		console.log(Auth.isLoggedIn())
    $scope.step=1;
    $scope.completedStep=1;
    $scope.backgroundImg = '../../../assets/images/incrust2.png';
	  $scope.sliderSrc1 = '../../../assets/images/incrust3.png';
  	$scope.sliderSrc2 = '../../../assets/images/incrust1.png';	
  	$timeout(function(){$('.slider').slider(); }, 500);
		
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
        $scope.completedStep = 2;
      }
    };

      $scope.loadFiles2 = function(file, errFiles) {
        console.log('bim');
      if (file){
        $scope.imageAsk2=true;
        $scope.file2 = file;
        $scope.completedStep = 3;
      }
    };

    $scope.qualityMessages=["A good quality for social networks or mobile wallpapers but the editing may be visible up close.",
                            "The best quality for goodies or printing ! The editing will be very nice, and only a close examination will reveal it.",
                            "Even a professionnal eye may have trouble to see where the editing occured! It's a quality for 4X4 meters panels or if you don't like compromises."]
    $scope.radioModel=0;
    //$scope.qualityMessage= $scope.qualityMessages[1]
    $scope.quaselect=function(radio){
      $scope.completedStep=4;
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
    $http.get('/api/getprice/incr').success(function(price) {
        basePrice = price.basePrice;
        unitModPrice = price.unitModPrice;
        quaPrice = price.quaPrice;
        reputPrice = price.reputPrice;
      });   


    // price
    var finalPrices = [];                         
    $scope.estimatePrice=function(){
      var tempPrice=basePrice;
      finalPrices = [];
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
      $scope.files = [$scope.file, $scope.file2];
      Upload.upload({
          url: 'api/updatefile',
          data: {file:$scope.file}
      });
      Upload.upload({
          url: 'api/updatefile',
          data: {file:$scope.file2}
      }).then(function (resp) {
          $http.post('/api/qqrequests/',{ owner:Auth.getCurrentUser().name,
                                        artist:"",
                                        modtype:"incr",
                                        vote:0,
                                        src:resp.data.filename,
                                        addinfos:[$scope.infos,$scope.infos2],
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





    $scope.$watchGroup(['radioModel'], function(newValues, oldValues, scope) {
      $scope.estimatePrice();
    }); 



})
