'use strict';

angular.module('styleyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('accountArtist', {
        url: '/accountArtist',
        templateUrl: 'app/user/artist/account/accountArtist/accountArtist.html',
        controller: 'AccountArtistCtrl'
      });
  });
