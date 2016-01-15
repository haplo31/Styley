'use strict';

describe('Controller: ArchivedRequestsCtrl', function () {

  // load the controller's module
  beforeEach(module('styleyApp'));

  var ArchivedRequestsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArchivedRequestsCtrl = $controller('ArchivedRequestsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
