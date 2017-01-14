'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
        'myApp.controllers',
        'myApp.version',
        'ui.router',
        'ngMaterial',
        'csv.service'
    ])
    .run(function($rootScope, Items) {
        $rootScope.dataList = [];

        Items.then(function(result) {
            $rootScope.dataList = result;
        }, function(error) {
            console.log(error)
        });
    })
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html',
                controller: 'HomeController'
            })
            .state('datalist', {
                url: '/datalist',
                templateUrl: 'templates/datalist.html',
                controller: 'dataListController'
            })
            .state('details', {
                url: '/details/:id',
                templateUrl: 'templates/datalistdetails.html',
                controller: 'dataListDetailsController'
            });

        $urlRouterProvider.otherwise('/home');
    }]);