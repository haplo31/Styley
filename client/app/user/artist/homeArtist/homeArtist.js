'use strict';

angular.module('styleyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('homeArtist', {
        url: '/homeArtist',
        templateUrl: 'app/user/artist/homeArtist/homeArtist.html',
        controller: 'HomeArtistCtrl'
      });
  });
