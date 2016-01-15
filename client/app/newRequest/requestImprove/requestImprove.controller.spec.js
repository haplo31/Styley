'use strict';

describe('Controller: RequestImproveCtrl', function () {

  // load the controller's module
  beforeEach(module('styleyApp'));

  var RequestImproveCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RequestImproveCtrl = $controller('RequestImproveCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
