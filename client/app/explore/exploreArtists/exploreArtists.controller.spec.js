'use strict';

describe('Controller: ExploreArtistsCtrl', function () {

  // load the controller's module
  beforeEach(module('styleyApp'));

  var ExploreArtistsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExploreArtistsCtrl = $controller('ExploreArtistsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
