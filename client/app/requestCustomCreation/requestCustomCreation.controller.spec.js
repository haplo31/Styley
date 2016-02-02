'use strict';

describe('Controller: RequestCustomCreationCtrl', function () {

  // load the controller's module
  beforeEach(module('styleyApp'));

  var RequestCustomCreationCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RequestCustomCreationCtrl = $controller('RequestCustomCreationCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
