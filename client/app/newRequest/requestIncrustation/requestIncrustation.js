'use strict';

angular.module('styleyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('requestIncrustation', {
        url: '/requestIncrustation',
        templateUrl: 'app/newRequest/requestIncrustation/requestIncrustation.html',
        controller: 'RequestIncrustationCtrl'
      });
  });
