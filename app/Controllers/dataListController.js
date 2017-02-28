'use strict';

angular.module('myApp.controllers')

    .controller('dataListDetailsController', ['Items', '$rootScope', '$scope', '$timeout', '$stateParams', function(Items, $rootScope, $scope, $timeout, $stateParams) {
        console.log("data list details controller loeaded");

        $scope.dataDetail = {};
        $scope.isEdit = false;
        console.log($rootScope.dataList);

        if ($stateParams.id && $rootScope.dataList) {
            angular.forEach($rootScope.dataList, function(item) {
                if (item && item.email === $stateParams.id) {
                    $scope.dataDetail = item;
                }
            })
        }

    }]);
