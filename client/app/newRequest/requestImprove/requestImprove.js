'use strict';

angular.module('styleyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('requestImprove', {
        url: '/requestImprove',
        templateUrl: 'app/newRequest/requestImprove/requestImprove.html',
        controller: 'RequestImproveCtrl'
      });
  });
