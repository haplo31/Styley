'use strict';

describe('Controller: UpdateWorkCtrl', function () {

  // load the controller's module
  beforeEach(module('styleyApp'));

  var UpdateWorkCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UpdateWorkCtrl = $controller('UpdateWorkCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
