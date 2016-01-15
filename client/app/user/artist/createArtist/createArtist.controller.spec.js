'use strict';

describe('Controller: CreateArtistCtrl', function () {

  // load the controller's module
  beforeEach(module('styleyApp'));

  var CreateArtistCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateArtistCtrl = $controller('CreateArtistCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
