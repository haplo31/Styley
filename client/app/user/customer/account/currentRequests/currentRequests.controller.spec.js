'use strict';

describe('Controller: CurrentRequestsCtrl', function () {

  // load the controller's module
  beforeEach(module('styleyApp'));

  var CurrentRequestsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CurrentRequestsCtrl = $controller('CurrentRequestsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
