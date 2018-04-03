var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'ScansController',
		templateUrl: 'views/scans.html'
	})
	.when('/scans', {
		controller:'ScansController',
		templateUrl: 'views/scans.html'
	})
	.when('/scans/details/:id',{
		controller:'ScansController',
		templateUrl: 'views/scan_details.html'
	})
	.when('/scans/add',{
		controller:'ScansController',
		templateUrl: 'views/add_scan.html'
	})
	.when('/scans/edit/:id',{
		controller:'ScansController',
		templateUrl: 'views/edit_scan.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});