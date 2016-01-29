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
})
