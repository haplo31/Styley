'use strict';

angular.module('styleyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('createArtist', {
        url: '/createArtist',
        templateUrl: 'app/user/artist/createArtist/createArtist.html',
        controller: 'CreateArtistCtrl'
      });
  });
