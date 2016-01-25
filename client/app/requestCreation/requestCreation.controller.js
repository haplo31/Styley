'use strict';

angular.module('styleyApp')
  .controller('RequestCreationCtrl', function ($scope,$modal) {
    $scope.removePerson = function(){
    var modalRequest = $modal.open({
	    animation: true,
	    templateUrl: '../../../components/requestCreation/requestRemovePerson/requestRemovePerson.html',
	    controller: 'CreaInstanceCtrl',
	    size: "lg",
	    resolve: {
	    }
	  });
	  modalRequest.result.then(function (selectedItem) {
	    $scope.selected = selectedItem;
	  }, function () {
	  });
    }

    $scope.removeObject = function(){
    var modalRequest = $modal.open({
	    animation: true,
	    templateUrl: '../../../components/requestCreation/requestRemoveObject/requestRemoveObject.html',
	    controller: 'CreaInstanceCtrl2',
	    size: "lg",
	    resolve: {
	    }
	  });
	  modalRequest.result.then(function (selectedItem) {
	    $scope.selected = selectedItem;
	  }, function () {
	  });
    }
  });
