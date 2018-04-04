var myApp = angular.module('myApp');

myApp.controller('PhotosController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('PhotosController loaded...');

	$scope.getPhotos = function(){
		$http.get('/api/photos').success(function(response){
			$scope.photos = response;
		});
	}

	$scope.getPhoto = function(){
		var id = $routeParams.id;
		$http.get('/api/photos/'+id).success(function(response){
			$scope.photo = response;
		});
	}

	$scope.addPhoto = function(){
		console.log($scope.photo);
		$http.post('/api/photos/', $scope.photo).success(function(response){
			window.location.href='#/photos';
		});
	}

	$scope.updatePhoto = function(){
		var id = $routeParams.id;
		$http.put('/api/photos/'+id, $scope.photo).success(function(response){
			window.location.href='#/photos';
		});
	}
}]);