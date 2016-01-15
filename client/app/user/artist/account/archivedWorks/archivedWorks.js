'use strict';

angular.module('styleyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('archivedWorks', {
        url: '/archivedWorks',
        templateUrl: 'app/user/artist/account/archivedWorks/archivedWorks.html',
        controller: 'ArchivedWorksCtrl'
      });
  });
