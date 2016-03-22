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
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'index.html',
				controller: 'IndexCtrl'
			})
			.when('/sign_in', {
        templateUrl: '../views/user_sessions/new.html',
        controller: 'UserSessionsCtrl'
      })
		  .otherwise({
        redirectTo: '/'
      });
    // $locationProvider.html5Mode(true);
	}]);
}());