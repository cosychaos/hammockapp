'use strict'


angular
  .module('Hammock')
  .controller('CourseModulesCtrl', ['$routeParams','CourseModulesService', function ($routeParams, CourseModulesService) {
      var self = this;
      var editMode = false;

      self.courseID = $routeParams.ID;
      self.modules=[];

      self.addNewModule = function() {
        var module = {
          title: self.moduleName,
          complete: false}
        CourseModulesService.createModule(module, self.courseID);
        self.moduleName = "";
      };

      self.editModule = function(module){
        self.editMode = false;
        CourseModulesService.updateModule(module);
        viewModules();
      };

      self.deleteModule = function(module){
        CourseModulesService.deleteModule(module);
        viewModules();
      };

      var requestModules = CourseModulesService.getModules(self.courseID);

      var resetModules = function(){
        self.courses = [[],[],[]];
      };

      var viewModules = function() {
        resetModules();
        requestModules.then(function(modules){
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
