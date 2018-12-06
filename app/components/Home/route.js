'use strict';

angular.module('sellerApp')
.config(function($stateProvider){
  $stateProvider
  .state('home',{
    url: '/home',
    templateUrl: 'app/components/Home/views/Home.html',
    controller: 'HomeController'
  })
} )
