'use strict';

angular.module('styleyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('exploreRequests', {
        url: '/exploreRequests',
        templateUrl: 'app/user/artist/exploreRequests/exploreRequests.html',
        controller: 'ExploreRequestsCtrl'
      });
  });
