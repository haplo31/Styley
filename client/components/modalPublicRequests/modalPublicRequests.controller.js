'use strict';

angular.module('styleyApp')
  .controller('ModalPublicRequestsCtrl', function ($scope,item,indexPic,$modal,$http) {
    $scope.message = 'Hello';
    $scope.item = item;
    $scope.indexPic = indexPic;
    console.log(indexPic);
    console.log("???");
    console.log(item);
    $scope.currentPic = item[indexPic];

    $scope.addHeartBtn = function(){
    	console.log("addBtn");
      item[indexPic].vote+=1;
      $http.put('/api/publicrequests/'+item[indexPic]._id, item[indexPic]);
	}

    $scope.leftBtn = function(){
     	indexPic--;
     	$scope.currentPic = item[indexPic];
	}

    $scope.rightBtn = function(){
     	indexPic++;
     	$scope.currentPic = item[indexPic];
    }

  });
