'use strict';

describe('Controller: HomeArtistCtrl', function () {

  // load the controller's module
  beforeEach(module('styleyApp'));

  var HomeArtistCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeArtistCtrl = $controller('HomeArtistCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
