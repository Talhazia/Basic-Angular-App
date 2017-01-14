'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'myApp.controllers',
  'myApp.version',
  'ui.router',
  'ngMaterial',
  'csv.service'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

	$stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'HomeController'
    })
    .state('view2', {
      url: '/view2',
      templateUrl: 'templates/view2.html',
      controller: 'View2Controller'
    });

    $urlRouterProvider.otherwise('/home');
}]);
