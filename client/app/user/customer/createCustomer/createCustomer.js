'use strict';

angular.module('styleyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('createCustomer', {
        url: '/createCustomer',
        templateUrl: 'app/user/customer/createCustomer/createCustomer.html',
        controller: 'CreateCustomerCtrl'
      });
  });
