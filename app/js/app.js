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
				templateUrl: 'views/main.html'
			})
			.when('/sign_in', {
        templateUrl: 'views/user_sessions/new.html',
        controller: 'UserSessionsCtrl',
        controllerAs: 'userSessionsCtrl'
      })
		  .otherwise({
        redirectTo: '/'
      });
    // $locationProvider.html5Mode(true);
	}])

	.config(['$authProvider', function($authProvider){
		$authProvider.configure({
			apiUrl: 'http://localhost:3000'
		})
	}]);
}());