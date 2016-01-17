'use strict';

angular.module('styleyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('requestDrawing', {
        url: '/requestDrawing',
        templateUrl: 'app/newRequest/requestDrawing/requestDrawing.html',
        controller: 'RequestDrawingCtrl'
      });
  });
