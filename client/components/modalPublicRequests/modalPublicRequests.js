'use strict';

angular.module('styleyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('modalPublicRequests', {
        url: '/modalPublicRequests',
        templateUrl: 'components/modalPublicRequests/modalPublicRequests.html',
        controller: 'ModalPublicRequestsCtrl'
      });
  });
