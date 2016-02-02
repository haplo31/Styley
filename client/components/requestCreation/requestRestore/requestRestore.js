'use strict';

angular.module('styleyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('requestRestore', {
        url: '/requestRestore',
        templateUrl: 'components/requestCreation/requestRestore/requestRestore.html',
        controller: 'RequestRestoreCtrl'
      });
  });
