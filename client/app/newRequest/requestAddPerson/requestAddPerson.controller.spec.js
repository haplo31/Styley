'use strict';

describe('Controller: RequestAddPersonCtrl', function () {

  // load the controller's module
  beforeEach(module('styleyApp'));

  var RequestAddPersonCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RequestAddPersonCtrl = $controller('RequestAddPersonCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
