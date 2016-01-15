'use strict';

angular.module('styleyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('requestAddObject', {
        url: '/requestAddObject',
        templateUrl: 'app/newRequest/requestAddObject/requestAddObject.html',
        controller: 'RequestAddObjectCtrl'
      });
  });
