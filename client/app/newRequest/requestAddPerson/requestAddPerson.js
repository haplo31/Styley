'use strict';

angular.module('styleyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('requestAddPerson', {
        url: '/requestAddPerson',
        templateUrl: 'app/newRequest/requestAddPerson/requestAddPerson.html',
        controller: 'RequestAddPersonCtrl'
      });
  });
