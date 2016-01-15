'use strict';

angular.module('styleyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('homeCustomer', {
        url: '/homeCustomer',
        templateUrl: 'app/user/customer/homeCustomer/homeCustomer.html',
        controller: 'HomeCustomerCtrl'
      });
  });
