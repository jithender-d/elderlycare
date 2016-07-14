// 'use strict';

// Declare app level module which depends on views, and components
myApp.config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/home', {
		templateUrl: 'home/home.html',
		controller: 'HomeController',
		// activetab: 'home'
	});

	$routeProvider.when('/shop', {
		templateUrl: 'shop/shop.html',
		controller: 'ShopController',
		// activetab: 'shop'
	});

	$routeProvider.when('/product', {
		templateUrl: 'product/product.html',
		controller: 'ProductController',
		// activetab: 'product'
	});
	
	$routeProvider.when('/cart', {
		templateUrl: 'cart/cart.html',
		controller: 'CartController',
		// activetab: 'cart'
	});

	$routeProvider.when('/checkout', {
		templateUrl: 'checkout/checkout.html',
		controller: 'CheckoutController',
		// activetab: 'checkout'
	});

	$routeProvider.when('/category', {
		templateUrl: 'category/category.html',
		controller: 'CategoryController',
		// activetab: 'category'
	});
	
	$routeProvider.when('/contact', {
		templateUrl: 'contact/contact.html',
		controller: 'ContactController',
		// activetab: 'contact'
	});

	$routeProvider.otherwise({redirectTo: '/home'});
}]);



