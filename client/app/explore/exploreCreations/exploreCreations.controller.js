'use strict';

angular.module('styleyApp')
  .controller('ExploreCreationsCtrl', function ($scope, $http) {
    $scope.message = 'Hello';
    $http.get("/api/publicrequests/most").success(function(photos){
    $scope.photos = photos;
      console.log(photos);
    });
		
		$scope.showLast=function(){
      $http.get("/api/publicrequests/last").success(function(photos){
    		$scope.photos = photos;
      	console.log(photos);
    	});
    }
    
    $scope.showMostVoted=function(){
      $http.get("/api/publicrequests/most").success(function(photos){
    		$scope.photos = photos;
      	console.log(photos);
    	});
    }

  });
