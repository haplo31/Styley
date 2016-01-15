'use strict';

angular.module('styleyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('currentRequests', {
        url: '/currentRequests',
        templateUrl: 'app/user/customer/account/currentRequests/currentRequests.html',
        controller: 'CurrentRequestsCtrl'
      });
  });
