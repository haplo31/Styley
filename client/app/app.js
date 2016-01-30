'use strict';

angular.module('styleyApp', [
  'styleyApp.auth',
  'styleyApp.admin',
  'styleyApp.constants',
  'ngCookies',
  'ngResource',
  'ngNotificationsBar',
  'ngSanitize',
  'ngAnimate',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'ngFileUpload',
  'ui.checkbox'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  })