'use strict';

angular.module('styleyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('modalRegularRequests', {
        url: '/modalRegularRequests',
        templateUrl: 'components/modalRegularRequests/modalRegularRequests.html',
        controller: 'ModalRegularRequestsCtrl'
      });
  });
