var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'PhotosController',
		templateUrl: 'views/photos.html'
	})
	.when('/photos', {
		controller:'PhotosController',
		templateUrl: 'views/photos.html'
	})
	.when('/photos/details/:id',{
		controller:'PhotosController',
		templateUrl: 'views/photo_details.html'
	})
	.when('/photos/add',{
		controller:'PhotosController',
		templateUrl: 'views/add_photo.html'
	})
	.when('/photos/edit/:id',{
		controller:'PhotosController',
		templateUrl: 'views/edit_photo.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});