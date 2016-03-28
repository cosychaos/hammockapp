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
      .when('/register', {
        templateUrl: 'views/user_registrations/new.html',
        controller: 'UserRegistrationsCtrl',
        controllerAs: 'userRegistrationsCtrl'
      })
      .when('/mycourses', {
        templateUrl: 'views/user_courses/my_courses.html',
        controller: 'UserCoursesCtrl',
        controllerAs: 'userCoursesCtrl'
      })
      .when('/mycourses/:ID/modules', {
        templateUrl: 'views/modules/modules.html',
        controller:'courseModules'

    })
		  .otherwise({
        redirectTo: '/'
      });
    // $locationProvider.html5Mode(true);
	}])

	.config(['$authProvider', function($authProvider){
		$authProvider.configure({
			apiUrl: 'http://localhost:3000'
		});
	}])

	.run(['$rootScope', '$location', function($rootScope, $location) {
 		$rootScope.$on('auth:login-success', function() {
    	$location.path('/mycourses');
  	});
	}]);

}());
