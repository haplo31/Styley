'use strict';

describe('Controller: ExploreRequestsCtrl', function () {

  // load the controller's module
  beforeEach(module('styleyApp'));

  var ExploreRequestsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExploreRequestsCtrl = $controller('ExploreRequestsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
