'use strict';

var csvService = angular.module('csv.service', []);

csvService.factory('Items', ['$http', '$q', function($http, $q){
  var Url   = "csv/user-data.csv";
  var deferred = $q.defer();
  var dataList = [];
  $http.get(Url).then(function(response){
     if(response) {
     	var CSVData = response.data;
     	var lines, lineNumber, data, length;
            lines = CSVData.split('\n');
            lineNumber = 0;
            for (var i = 1; i < lines.length - 1; i++) {
                var l = lines[i];

                lineNumber++;
                data = l.split(',');

                var firstname = data[0];
                var lastname = data[1];
                var email = data[2];

                dataList.push({
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    avatar: 'img/avatar.svg'
                });

            }
            deferred.resolve(dataList);
     }
  }, function(error) {
  	if(error) {
  		deferred.reject(error);
  	}
  });
  return deferred.promise;
}]);