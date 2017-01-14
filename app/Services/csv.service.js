'use strict';

var csvService = angular.module('csv.service', []);

csvService.factory('Items', ['$http', function($http){
  var Url   = "csv/user-data.csv";
  var Items = $http.get(Url).then(function(response){
     return (response.data);
  });
  return Items;
}]);