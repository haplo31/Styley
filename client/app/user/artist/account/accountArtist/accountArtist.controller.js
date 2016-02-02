'use strict';

angular.module('styleyApp')
  .controller('AccountArtistCtrl', function ($scope,Auth,$http,Upload) {
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
	  $scope.loadFiles = function(file, errFiles,key) {
	  	console.log(key)
  	  if (file){
  	    $scope.file = file;
  	    Upload.upload({
          url: 'api/updatefile',
          data: {file:file}
      	}).then(function(resp){
      		$scope.currentRequests[key].resultsrc.push(resp.data.filename)
      		$http.post('/api/qqsystem/resultartist',{request:$scope.currentRequests[key]})
      	})
  	  }
		};
  });
