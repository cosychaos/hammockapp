'use strict'

angular
  .module('Hammock')
  .controller('UserSessionsCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
      var self = this;
      self.courseID = course$scope.ID = $routeParams.ID;
    };
  }]);
