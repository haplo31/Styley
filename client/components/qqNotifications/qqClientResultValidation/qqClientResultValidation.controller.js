'use strict';

angular.module('styleyApp')
  .controller('qqClientResultValidation', function ($scope,data,$timeout,$http,$modalInstance) {
    $scope.data = data
    $scope.reput = data.rating
    $scope.quality = data.quality
    $scope.price = data.price
    $scope.original=true;

    $scope.payArtist = function(){
    	if($scope.checkboxModel== true){
	    	$http.post('/api/qqsystem/payartist',{request:data,visibility:'public'}).success(function(){
	            $modalInstance.close();
	      });    		
    	}
    	else{
	    	$http.post('/api/qqsystem/payartist',{request:data,visibility:'private'}).success(function(){
	            $modalInstance.close();
	      });     		
    	}
    }
  });
