'use strict';

angular
	.module('Hammock')
  .controller('UserSessionsCtrl', ['$scope', function ($scope) {
  	$scope.$on('auth:login-error', function(event, reason){
  		$scope.error = reason.errors[0];
  	});
  }]);