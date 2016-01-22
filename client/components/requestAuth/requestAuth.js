'use strict';

angular.module('styleyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('requestAuth', {
        url: '/requestAuth',
        templateUrl: 'components/requestAuth/requestAuth.html',
        controller: 'LoginController'
      });
  });
