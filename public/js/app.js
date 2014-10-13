'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.directives',
  'ui.router'
]).
config(function ($routeProvider, $locationProvider,$stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/dashboard");
  //
  // Now set up the states
  $stateProvider
    .state('dashboard', {
      url: "/dashboard",
      templateUrl: "partials/dashboard.jade",
      controller: 'dashboardCtrl'
    })
});
