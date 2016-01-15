'use strict';

describe('Controller: RequestCustomCtrl', function () {

  // load the controller's module
  beforeEach(module('styleyApp'));

  var RequestCustomCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RequestCustomCtrl = $controller('RequestCustomCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
