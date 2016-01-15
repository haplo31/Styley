'use strict';

describe('Controller: AccountCustomerCtrl', function () {

  // load the controller's module
  beforeEach(module('styleyApp'));

  var AccountCustomerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccountCustomerCtrl = $controller('AccountCustomerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
