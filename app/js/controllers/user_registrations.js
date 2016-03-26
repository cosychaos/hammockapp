'use strict';

angular.module('Hammock')
  .controller('UserRegistrationsCtrl', ['$scope', '$location', '$auth', function ($scope, $location, $auth) {
      $scope.$on('auth:registration-email-error', function(event, reason){
        $scope.error = "Registration failed: try a different email or password";
      });
      $scope.handleRegBtnClick = function(){
  		$auth.submitRegistration($scope.registrationForm)
  		.then(function(){
  			$auth.submitLogin({
  				email: $scope.registrationForm.email,
  				password: $scope.registrationForm.password
  			});
  		});
  	};

  }]);
