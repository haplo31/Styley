'use strict';

describe('Controller: CreateCustomerCtrl', function () {

  // load the controller's module
  beforeEach(module('styleyApp'));

  var CreateCustomerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateCustomerCtrl = $controller('CreateCustomerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
