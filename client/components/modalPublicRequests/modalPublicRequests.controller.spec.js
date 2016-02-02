'use strict';

describe('Controller: ModalPublicRequestsCtrl', function () {

  // load the controller's module
  beforeEach(module('styleyApp'));

  var ModalPublicRequestsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModalPublicRequestsCtrl = $controller('ModalPublicRequestsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
