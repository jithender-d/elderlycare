// 'use strict';

// Declare app level module which depends on views, and components
/*angular.module('myApp', ['ngRoute','ui.bootstrap','myApp.view1','myApp.view2','myApp.view3','myApp.view4','myApp.version']).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);*/

var myApp = angular.module('sample', ['ngRoute']).run(function() {
});



// Declare app level module which depends on views, and components
myApp.config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'home/templates/home.html',
		controller: 'HomeController',
		// activetab: 'home'
	});

	$routeProvider.when('/registration', {
		templateUrl: 'home/templates/register.html',
		controller: 'HomeController',
		// activetab: 'home'
	});

	

	$routeProvider.otherwise({redirectTo: '/'});
}]);