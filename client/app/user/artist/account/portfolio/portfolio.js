'use strict';

angular.module('styleyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('portfolio', {
        url: '/portfolio',
        templateUrl: 'app/user/artist/account/portfolio/portfolio.html',
        controller: 'PortfolioCtrl'
      });
  });
