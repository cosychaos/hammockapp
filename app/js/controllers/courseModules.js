'use strict'

angular
  .module('Hammock')
  .controller('CourseModulesCtrl', ['$routeParams', function ($routeParams) {
      var self = this;
      self.courseID = $routeParams.ID;
      self.modules=[{text:"task 1", done:false}, {text: "task 2", done:true}];

      self.addNewModule = function() {
        self.modules.push({
          text: self.moduleName,
          done: false});
        self.moduleName = "";
      };

      self.removeChoice = function() {
        var lastItem = self.modules.length-1;
        self.modules.splice(lastItem);
      };

      self.hoverIn = function(){
        self.hoverEdit = true;
      };

      self.hoverOut = function(){
        self.hoverEdit = false;
      };
}]);
