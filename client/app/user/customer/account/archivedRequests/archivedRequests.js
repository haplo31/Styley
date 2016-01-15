'use strict';

angular.module('styleyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('archivedRequests', {
        url: '/archivedRequests',
        templateUrl: 'app/user/customer/account/archivedRequests/archivedRequests.html',
        controller: 'ArchivedRequestsCtrl'
      });
  });
