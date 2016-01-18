'use strict';

angular.module('styleyApp')
  .controller('RequestRemovePersonCtrl', function ($scope,) {
    $scope.message = 'Hello';
  })
    .controller('CreaInstanceCtrl', function ($scope,$timeout) {
	$scope.step=1;
	$scope.sliderSrc1 = '../../../assets/images/rem1.png'
  $scope.sliderSrc2 = '../../../assets/images/rem2.png'	
  $timeout(function(){$('.slider').slider(); }, 100);
	$scope.nextStep = function(){$scope.step++};
	})
