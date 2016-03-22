(function(){
	'use strict';

	angular 
		.module('Hammock', [
			'ngResource', 
			'ngAnimate',
			'ngCookies',
			'ngRoute',
			'ng-token-auth'
			])
	.config(function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'index.html',
				controller: 'IndexCtrl'
			})
		  .otherwise({
        redirectTo: '/'
      });
	});
}());