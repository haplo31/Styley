'use strict';

angular.module('styleyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('currentWorks', {
        url: '/currentWorks',
        templateUrl: 'app/user/artist/account/currentWorks/currentWorks.html',
        controller: 'CurrentWorksCtrl'
      });
  });
