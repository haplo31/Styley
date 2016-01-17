'use strict';

describe('Controller: RequestDrawingCtrl', function () {

  // load the controller's module
  beforeEach(module('styleyApp'));

  var RequestDrawingCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RequestDrawingCtrl = $controller('RequestDrawingCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
