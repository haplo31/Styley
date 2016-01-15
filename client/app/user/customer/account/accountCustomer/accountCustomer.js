'use strict';

angular.module('styleyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('accountCustomer', {
        url: '/accountCustomer',
        templateUrl: 'app/user/customer/account/accountCustomer/accountCustomer.html',
        controller: 'AccountCustomerCtrl'
      });
  });
