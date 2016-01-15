'use strict';

angular.module('styleyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('updateWork', {
        url: '/updateWork',
        templateUrl: 'app/user/artist/account/updateWork/updateWork.html',
        controller: 'UpdateWorkCtrl'
      });
  });
