'use strict';

describe('Controller: RequestIncrustationCtrl', function () {

  // load the controller's module
  beforeEach(module('styleyApp'));

  var RequestIncrustationCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RequestIncrustationCtrl = $controller('RequestIncrustationCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
