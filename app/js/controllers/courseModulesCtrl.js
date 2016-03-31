'use strict'


angular
  .module('Hammock')
  .controller('CourseModulesCtrl', ['$routeParams','CourseModulesService', '$timeout', function ($routeParams, CourseModulesService, $timeout) {
      var self = this;
      var editMode = false;

      self.courseID = $routeParams.ID;
      self.modules=[];

      self.addNewModule = function() {
        var module = {
          title: self.moduleName,
          complete: false}
        CourseModulesService.createModule(module, self.courseID)
          .then(viewModules);
        self.moduleName = "";
      };

      self.editModule = function(module){
        self.editMode = false;
        CourseModulesService.updateModule(module)
          .then(viewModules);
      };

      self.deleteModule = function(module){
        CourseModulesService.deleteModule(module)
          .then(viewModules);
      };

      var requestModules = function() {
        return CourseModulesService.getModules(self.courseID);
      }

      var resetModules = function(){
        self.modules = [];
      };

      var viewModules = function() {
        requestModules().then(function(modules){
          self.modules = modules;
        });
      };

      self.hoverIn = function(){
        self.hoverEdit = true;
      };

      self.hoverOut = function(){
        self.hoverEdit = false;
      };

      viewModules();

}]);
