'use strict';

angular.module('styleyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/user/signup/signup.html',
        controller: 'SignupCtrl'
      });
  });
