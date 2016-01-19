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
        posTop=angular.element(document.querySelector('#picturezone')).prop('offsetTop')+event.offsetY-24;
        posLeft=angular.element(document.querySelector('#picturezone')).prop('offsetLeft')+event.offsetX-24;
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
    $scope.$watch('step', function (value) {
      $timeout(function(){
        if (value==3){
          var ratioImg=angular.element(document.querySelector('#picturerecap')).prop('width')/$scope.btnPlaced[0].width;   
          $scope.btnRecap = [];
          for (var i = 0; i < $scope.btnPlaced.length; i++) {
            // TODO: pbm to catch the left position...
            posLeft = angular.element(document.querySelector('#recapdiv')).prop('margin-left') + $scope.btnPlaced[i].posLeft*ratioImg;
            console.log( angular.element(document.querySelector('#recapdiv')).prop('margin-left') )
            $scope.btnRecap.push( {'posTop':$scope.btnPlaced[i].posTop*ratioImg, 'posLeft':posLeft});
          };
        }}, 100);  
    });
  })