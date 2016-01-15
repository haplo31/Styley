'use strict';

describe('Controller: HomeCustomerCtrl', function () {

  // load the controller's module
  beforeEach(module('styleyApp'));

  var HomeCustomerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeCustomerCtrl = $controller('HomeCustomerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
