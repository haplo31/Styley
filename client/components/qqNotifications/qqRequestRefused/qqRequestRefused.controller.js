'use strict';

angular.module('styleyApp')
  .controller('qqRequestRefused', function ($scope,$http,$modalInstance,Auth,socket) {
	$scope.rejoinQQSystem = function(){
		socket.emit("sendSocketQQ",{name:Auth.getCurrentUser().name,gskills:Auth.getCurrentUser().gskills,date:new Date().getTime(),socket:socket.id})
		$modalInstance.close();
	}
	$scope.quitQQSystem = function(){
		$modalInstance.close();
	}	
  });
