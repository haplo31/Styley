'use strict';

describe('Controller: ArchivedWorksCtrl', function () {

  // load the controller's module
  beforeEach(module('styleyApp'));

  var ArchivedWorksCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArchivedWorksCtrl = $controller('ArchivedWorksCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
