'use strict';

angular.module('styleyApp')
  .controller('RequestRemoveObjectCtrl', function ($scope) {
    $scope.message = 'Hello';
  }).controller('CreaInstanceCtrl2', function ($scope,$timeout,$http,Auth,Upload,$modalInstance) {
    $scope.isLoggedIn = Auth.isLoggedIn
	console.log(Auth.isLoggedIn())
    $scope.step=1;
    $scope.completedStep=1;
	$scope.sliderSrc1 = '../../../assets/images/remObj1.png';
  	$scope.sliderSrc2 = '../../../assets/images/remObj2.png';	
  	$timeout(function(){$('.slider').slider(); }, 100);
		
    $scope.nextStep = function(){
      $scope.step =1;
    };
    
    $scope.previousStep = function(){
      $scope.step=1;
    };
});
