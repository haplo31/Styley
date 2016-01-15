'use strict';

describe('Controller: RequestRemovePersonCtrl', function () {

  // load the controller's module
  beforeEach(module('styleyApp'));

  var RequestRemovePersonCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RequestRemovePersonCtrl = $controller('RequestRemovePersonCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
