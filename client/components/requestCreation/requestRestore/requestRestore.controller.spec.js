'use strict';

describe('Controller: RequestRestoreCtrl', function () {

  // load the controller's module
  beforeEach(module('styleyApp'));

  var RequestRestoreCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RequestRestoreCtrl = $controller('RequestRestoreCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
