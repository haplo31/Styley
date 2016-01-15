'use strict';

angular.module('styleyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('requestRemoveObject', {
        url: '/requestRemoveObject',
        templateUrl: 'app/newRequest/requestRemoveObject/requestRemoveObject.html',
        controller: 'RequestRemoveObjectCtrl'
      });
  });
