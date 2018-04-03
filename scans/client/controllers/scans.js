var myApp = angular.module('myApp');

myApp.controller('ScansController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('Scans Controller loaded...');

	$scope.getScans = function(){
		$http.get('/api/scans').success(function(response){
			$scope.scans = response;
		});
	}

	$scope.getScan = function(){
		var id = $routeParams.id;
		$http.get('/api/scans/'+id).success(function(response){
			$scope.scan = response;
		});
	}

	$scope.addScan = function(){
		console.log($scope.scan);
		$http.post('/api/scans/', $scope.scan).success(function(response){
			window.location.href='#/scans';
		});
	}

	$scope.updateScan = function(){
		var id = $routeParams.id;
		$http.put('/api/scans/'+id, $scope.scan).success(function(response){
			window.location.href='#/scans';
		});
	}

	$scope.removeScan = function(id){
		$http.delete('/api/scans/'+id).success(function(response){
			window.location.href='#/scans';
		});
	}
}]);