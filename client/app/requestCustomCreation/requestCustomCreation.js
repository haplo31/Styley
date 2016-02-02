'use strict';

angular.module('styleyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('requestCustomCreation', {
        url: '/requestCustomCreation',
        templateUrl: 'app/requestCustomCreation/requestCustomCreation.html',
        controller: 'RequestCustomCreationCtrl'
      });
  });
