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
				templateUrl: 'blank.html'
			})
			.when('/sign_in', {
        templateUrl: 'new.html'
        // controller: 'UserSessionsCtrl'
      })
		  .otherwise({
        redirectTo: '/'
      });
    // $locationProvider.html5Mode(true);
	}]);
}());