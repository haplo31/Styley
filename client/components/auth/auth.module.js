'use strict';

angular.module('styleyApp.auth', [
  'styleyApp.constants',
  'styleyApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
