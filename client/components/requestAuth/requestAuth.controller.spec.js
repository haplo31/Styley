'use strict';

describe('Controller: RequestAuthCtrl', function () {

  // load the controller's module
  beforeEach(module('styleyApp'));

  var RequestAuthCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RequestAuthCtrl = $controller('RequestAuthCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
