'use strict';

describe('Controller: AccountArtistCtrl', function () {

  // load the controller's module
  beforeEach(module('styleyApp'));

  var AccountArtistCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccountArtistCtrl = $controller('AccountArtistCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
