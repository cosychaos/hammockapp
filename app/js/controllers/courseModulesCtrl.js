'use strict'


angular
  .module('Hammock')
  .controller('CourseModulesCtrl', ['$routeParams','CourseModulesService', 'UserCoursesService', '$timeout', function ($routeParams, CourseModulesService, UserCoursesService, $timeout) {
      var self = this;
      var editMode = false;

      self.courseID = $routeParams.ID;
      self.modules=[];
      self.course;

      self.addNewModule = function() {
        var module = {title: self.moduleName, complete: false};
        CourseModulesService.createModule(module, self.courseID)
          .then(viewModules);
        self.moduleName = "";
      };

      self.getCourse = function() {
        return UserCoursesService.showCourse(self.courseID)
        .then(function(course) {
          self.course = course});
      }

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
      };

      var viewModules = function() {
        requestModules().then(function(modules){
          self.modules = modules;
          self.getCourse();
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
