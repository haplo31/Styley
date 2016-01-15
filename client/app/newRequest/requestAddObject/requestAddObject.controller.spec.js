'use strict';

describe('Controller: RequestAddObjectCtrl', function () {

  // load the controller's module
  beforeEach(module('styleyApp'));

  var RequestAddObjectCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RequestAddObjectCtrl = $controller('RequestAddObjectCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
