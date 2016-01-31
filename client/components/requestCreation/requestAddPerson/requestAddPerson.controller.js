'use strict';

angular.module('styleyApp')
  .controller('addPersCtrl', function ($scope,$timeout,$http,Auth,Upload,$modalInstance) {
    $scope.message = 'Hello';
    $scope.isLoggedIn = Auth.isLoggedIn
		console.log(Auth.isLoggedIn())
    $scope.step=1;
    $scope.completedStep=1;
	$scope.sliderSrc1 = '../../../assets/images/remperson3.png';
  	$scope.sliderSrc2 = '../../../assets/images/remperson2.png';	
  	$scope.backgroundImg = '../../../assets/images/remperson1.png';	
  	$timeout(function(){$('.slider').slider(); }, 500);
  });
