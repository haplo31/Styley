'use strict';

angular.module('styleyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('requestCustom', {
        url: '/requestCustom',
        templateUrl: 'app/newRequest/requestCustom/requestCustom.html',
        controller: 'RequestCustomCtrl'
      });
  });
