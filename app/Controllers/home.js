'use strict';

angular.module('myApp.controllers', [])

    .controller('HomeController', ['$scope', function($scope) {
        //console.log("Home controller loaded");

        $scope.candidateName = "Talha Zia";
        $scope.interviewer = "Radek Zajkowski";


    }]);