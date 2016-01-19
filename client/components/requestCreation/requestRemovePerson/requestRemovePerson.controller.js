'use strict';

angular.module('styleyApp')
  .controller('RequestRemovePersonCtrl', function ($scope,) {
    $scope.message = 'Hello';
  })
  .controller('CreaInstanceCtrl', function ($scope,$timeout) {
		
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
    var posTop,posLeft,imgWidth,imgHeight;
    
    $scope.select= function(color){
      $scope.redPointer = true;
      return false;
    }

    $scope.clickOnImg = function(event){
      if ($scope.redPointer === true){
        console.log(angular.element(document.querySelector('#picturezone')).prop('offsetLeft'))
        console.log(event.offsetX)
        posTop=event.offsetY;
        posLeft=event.offsetX;
        imgWidth=angular.element(document.querySelector('#picturezone')).prop('width');
        imgHeight=angular.element(document.querySelector('#picturezone')).prop('height');
        $scope.btnPlaced.push({'posTop': posTop,'posLeft': posLeft,'width': imgWidth, 'height': imgHeight});
        console.log(posTop);
        console.log(posLeft);
        console.log(imgWidth);
        console.log(imgHeight);
        console.log("");
        $scope.redPointer = false;
        $scope.completedStep = 2;
      }
    };
    
    $scope.removePlaced = function(index){
      $scope.btnPlaced.splice(index,1);
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
    $scope.$watch('step', function (value) {
      $timeout(function(){
        if (value==3){
          var ratioImg=angular.element(document.querySelector('#picturerecap')).prop('width')/$scope.btnPlaced[0].width;   
          $scope.btnRecap = [];
          for (var i = 0; i < $scope.btnPlaced.length; i++) {
            // TODO: pbm to catch the left position...
            posTop=angular.element(document.querySelector('#picturerecap')).prop('offsetTop')+$scope.btnPlaced[i].posTop*ratioImg-24;
            posLeft = angular.element(document.querySelector('#picturerecap')).prop('offsetLeft')+$scope.btnPlaced[i].posLeft*ratioImg-24;
            $scope.btnRecap.push( {'posTop': posTop, 'posLeft':posLeft});
          };
        }}, 100);  
    });
  })