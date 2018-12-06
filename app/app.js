'use strict';

/**
 * @ngdoc overview
 * @name sellerApp
 * @description
 * # sellerApp
 *
 * Main module of the application.
 */

angular
  .module('sellerApp', [
    'ui.router',
    'sellerApp.controllers',
    'sellerApp.services'
])
  .config(['$urlRouterProvider',
    function($urlRouterProvider) {
      $urlRouterProvider
        .otherwise('/home');
    }
  ]);
