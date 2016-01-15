'use strict';

describe('Controller: ExploreCreationsCtrl', function () {

  // load the controller's module
  beforeEach(module('styleyApp'));

  var ExploreCreationsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExploreCreationsCtrl = $controller('ExploreCreationsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
