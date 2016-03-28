'use strict'

angular
  .module('Hammock')
  .controller('CourseModulesCtrl', ['$routeParams', function ($routeParams) {
      var self = this;
      self.courseID = $routeParams.ID;

      self.modules = [];

      self.addNewModule = function() {
        self.modules.push(self.moduleName);
        self.moduleName = "";
      };

      self.removeChoice = function() {
        var lastItem = self.modules.length-1;
        self.modules.splice(lastItem);
      };

  }]);
