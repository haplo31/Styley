'use strict';

angular.module('styleyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('exploreArtists', {
        url: '/exploreArtists',
        templateUrl: 'app/explore/exploreArtists/exploreArtists.html',
        controller: 'ExploreArtistsCtrl'
      });
  });
