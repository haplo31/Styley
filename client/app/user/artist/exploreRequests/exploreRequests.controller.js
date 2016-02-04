'use strict';

angular.module('styleyApp')
  .controller('ExploreRequestsCtrl', function ($scope,Auth,$http,$modal) {
  	console.log(Auth.getCurrentUser().type)
    if (Auth.getCurrentUser().type=='artist'){
    	$http.get("/api/regularrequests").success(function(requests){
	      $scope.requests = requests;
	      console.log(requests);
	    });
    }
    $scope.modalPic = function(item) {
      console.log(item);
      var modalInstance = $modal.open({
        animation: true,
        templateUrl: '../../../components/modalRegularRequests/modalRegularRequests.html',
        controller: 'ModalRegularRequestsCtrl',
        size: "lg",
        resolve: {
          item: function () {
            return item;
          }
        }
      });
    };
  });
