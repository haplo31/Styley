'use strict';

angular.module('styleyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/user/login/login.html',
        controller: 'LoginCtrl'
      });
  });
