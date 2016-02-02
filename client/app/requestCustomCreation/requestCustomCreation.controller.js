'use strict';

angular.module('styleyApp')
  .controller('RequestCustomCreationCtrl', function ($scope,$modal) {
    $scope.message = 'Hello';

    $scope.drawing = function(){
    var modalRequest = $modal.open({
	    animation: true,
	    templateUrl: '../../../components/requestCreation/requestDrawing/requestDrawing.html',
	    controller: 'drawCtrl',
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
