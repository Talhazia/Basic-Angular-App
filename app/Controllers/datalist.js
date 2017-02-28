'use strict';

angular.module('myApp.controllers')
    .controller('dataListController', ['$rootScope', 'Items', '$scope', '$stateParams', function($rootScope, Items, $scope, $stateParams) {
        $scope.isSortASC = true;

        $scope.sort = function() {
            if ($scope.isSortASC) {
                $rootScope.dataList.reverse(function(a, b) {
                    if (a.firstname < b.firstname) return -1;
                    if (a.firstname > b.firstname) return 1;
                    return 0;
                });
                $scope.isSortASC = false;
            } else {
                $rootScope.dataList.sort(function(a, b) {
                    if (a.firstname < b.firstname) return -1;
                    if (a.firstname > b.firstname) return 1;
                    return 0;
                });
                $scope.isSortASC = true;
            }
        }

        $scope.delete = function(index) {
            $rootScope.dataList.splice(index, 1);
            $scope.isSortASC = true;
        }
    }]);
