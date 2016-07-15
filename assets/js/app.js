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

	$routeProvider.when('/home', {
		templateUrl: 'home/templates/home.html',
		controller: 'HomeController',
		// activetab: 'home'
	});

	$routeProvider.when('/registrationUser', {
		templateUrl: 'home/templates/register.html',
		controller: 'RegistrationController',
		// activetab: 'home'
	});
	$routeProvider.when('/registrationOrganization', {
		templateUrl: 'home/templates/register.html',
		controller: 'RegistrationController',
		// activetab: 'home'
	});
	$routeProvider.when('/search', {
		templateUrl: 'home/templates/search.html',
		controller: 'SearchController',
		// activetab: 'home'
	});

	$routeProvider.when('/contact-us', {
		templateUrl: 'home/templates/contact-us.html',
		// controller: 'SearchController',
		// activetab: 'home'
	});

	

	$routeProvider.otherwise({redirectTo: '/home'});
}])
.run(function ($rootScope, $location, ajaxwebservice,$templateCache) {
    $rootScope.organization = false;
    $rootScope.user = false;
     $rootScope.footer = true;
    //logic to apply title in header
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        if(current.$$route && ($location.path() == '/registrationOrganization')){
            $rootScope.organization = true;
    		$rootScope.user = false;
        }else if(current.$$route && ($location.path() == '/registrationUser')){
        	$rootScope.organization = false;
    		$rootScope.user = true;
        }
        if(current.$$route && ($location.path() == '/home')){
        	$rootScope.footer = false;
        }
    });

}); 
//routes end