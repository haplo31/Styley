'use strict';

angular.module('styleyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('requestCreation', {
        url: '/requestCreation',
        templateUrl: 'app/requestCreation/requestCreation.html',
        controller: 'RequestCreationCtrl'
      });
  });
