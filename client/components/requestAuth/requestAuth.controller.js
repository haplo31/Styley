'use strict';

angular.module('styleyApp')
  .controller('RequestAuthCtrl', function ($scope, Auth, $location, $window,socket) {
    $scope.user = {};
    $scope.errors = {};

  

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });

