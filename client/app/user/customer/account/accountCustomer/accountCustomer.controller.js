'use strict';

angular.module('styleyApp')
  .controller('AccountCustomerCtrl', function ($scope,Auth,$http,Upload) {
    $scope.currentRequests = [];
    $scope.getCurrentUser = Auth.getCurrentUser
    var currentRequestsId = Auth.getCurrentUser().currentrequests;
    if (currentRequestsId){
	    for (var i =0; i<currentRequestsId.length; i++) {
	    	$http.get("/api/currentrequests/"+currentRequestsId[i]).success(function(request) {
	        $scope.currentRequests.push(request)
	      });
	    };
	  }
	  $scope.imgNumber=0;
  });
