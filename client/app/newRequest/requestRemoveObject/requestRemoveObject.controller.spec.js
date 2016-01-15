'use strict';

describe('Controller: RequestRemoveObjectCtrl', function () {

  // load the controller's module
  beforeEach(module('styleyApp'));

  var RequestRemoveObjectCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RequestRemoveObjectCtrl = $controller('RequestRemoveObjectCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
