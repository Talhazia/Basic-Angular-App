'use strict';

angular.module('myApp.controllers')

.controller('View2Controller', ['Items', '$scope', function(Items, $scope) {
	console.log("view 2 controller loeaded");

	Items.then(function(result){

	$scope.csvData = result;
	$scope.dataList = [];
    $scope.data = [];

	var lines, lineNumber, data, length;
	    $scope.dataList = [];
	    lines = $scope.csvData.split('\n');
	    lineNumber = 0;
	    for (var i = 1; i < lines.length - 1; i++) {
	        var l = lines[i];

	        lineNumber++;
	        data = l.split(',');

	        var firstname = data[0];
	        var lastname = data[1];
	        var email = data[2];

	        $scope.dataList.push({
	            firstname: firstname,
	            lastname: lastname,
	            email: email,
	            avatar: 'img/avatar.svg'
	        });

	    }

	    console.log($scope.dataList);
	    $scope.dataList.sort(function(a, b){
		    if(a.firstname < b.firstname) return -1;
		    if(a.firstname > b.firstname) return 1;
		    return 0;
		})

	});

		$scope.reverse = function() {
	    $scope.dataList.reverse(function(a, b){
		    if(a.firstname < b.firstname) return -1;
		    if(a.firstname > b.firstname) return 1;
		    return 0;
		})		
	}

		$scope.delete=function($index){ 
		  $scope.dataList.splice($index,1);     
		}

}]);