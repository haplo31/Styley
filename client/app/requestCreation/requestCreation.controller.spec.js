'use strict';

describe('Controller: RequestCreationCtrl', function () {

  // load the controller's module
  beforeEach(module('styleyApp'));

  var RequestCreationCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RequestCreationCtrl = $controller('RequestCreationCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
