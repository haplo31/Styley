'use strict';

angular.module('styleyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('requestRemovePerson', {
        url: '/requestRemovePerson',
        templateUrl: 'app/newRequest/requestRemovePerson/requestRemovePerson.html',
        controller: 'RequestRemovePersonCtrl'
      });
  });
