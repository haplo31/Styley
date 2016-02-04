'use strict';

describe('Controller: ModalRegularRequestsCtrl', function () {

  // load the controller's module
  beforeEach(module('styleyApp'));

  var ModalRegularRequestsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModalRegularRequestsCtrl = $controller('ModalRegularRequestsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
