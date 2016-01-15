'use strict';

angular.module('styleyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('exploreCreations', {
        url: '/exploreCreations',
        templateUrl: 'app/explore/exploreCreations/exploreCreations.html',
        controller: 'ExploreCreationsCtrl'
      });
  });
