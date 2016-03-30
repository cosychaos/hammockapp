'use strict'

angular
  .module('Hammock')
  .controller('CourseModulesCtrl', ['$routeParams', function ($routeParams) {
      var self = this;
      var editMode = false;

      self.courseID = $routeParams.ID;
      self.modules=[];

      self.addNewModule = function() {
        self.modules.push({
          text: self.moduleName,
          done: false});
        self.moduleName = "";
      };

      self.markAllDone = function() {
        if (self.selectedAll) {
            self.selectedAll = true;
        } else {
            self.selectedAll = false;
        }

        angular.forEach(self.modules, function (module) {
            module.done = self.selectedAll;
        });
      };

      self.editModule = function(module){
        self.editMode = false;
      };

      self.deleteModule = function(module){
        var index = self.modules.indexOf(module);
        self.modules.splice(index, 1);
      };

      self.hoverIn = function(){
        self.hoverEdit = true;
      };

      self.hoverOut = function(){
        self.hoverEdit = false;
      };

}]);
