'use strict';

angular.module('styleyApp')
  .controller('RequestCreationCtrl', function ($scope,$modal) {
    $scope.removePerson = function(){
    var modalRequest = $modal.open({
	    animation: true,
	    templateUrl: '../../../components/requestCreation/requestRemovePerson/requestRemovePerson.html',
	    controller: 'remPersonCtrl',
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
	    controller: 'remObjCtrl',
	    size: "lg",
	    resolve: {
	    }
	  });
	  modalRequest.result.then(function (selectedItem) {
	    $scope.selected = selectedItem;
	  }, function () {
	  });
    }

    $scope.incrustation = function(){
    var modalRequest = $modal.open({
	    animation: true,
	    templateUrl: '../../../components/requestCreation/requestIncrustation/requestIncrustation.html',
	    controller: 'remObjCtrl',
	    size: "lg",
	    resolve: {
	    }
	  });
	  modalRequest.result.then(function (selectedItem) {
	    $scope.selected = selectedItem;
	  }, function () {
	  });
    }

    $scope.improve = function(){
    var modalRequest = $modal.open({
	    animation: true,
	    templateUrl: '../../../components/requestCreation/requestImprove/requestImprove.html',
	    controller: 'remObjCtrl',
	    size: "lg",
	    resolve: {
	    }
	  });
	  modalRequest.result.then(function (selectedItem) {
	    $scope.selected = selectedItem;
	  }, function () {
	  });
    }

    $scope.drawing = function(){
    var modalRequest = $modal.open({
	    animation: true,
	    templateUrl: '../../../components/requestCreation/requestDrawing/requestDrawing.html',
	    controller: 'remObjCtrl',
	    size: "lg",
	    resolve: {
	    }
	  });
	  modalRequest.result.then(function (selectedItem) {
	    $scope.selected = selectedItem;
	  }, function () {
	  });
    }

    
    $scope.addPerson = function(){
    var modalRequest = $modal.open({
	    animation: true,
	    templateUrl: '../../../components/requestCreation/requestAddPerson/requestAddPerson.html',
	    controller: 'remObjCtrl',
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
