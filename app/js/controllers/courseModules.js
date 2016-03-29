'use strict'

angular
  .module('Hammock')
  .controller('CourseModulesCtrl', ['$routeParams', function ($routeParams) {
      var self = this;
      self.courseID = $routeParams.ID;
      self.modules=[{id: 0, text:"task 1", done:false}, {id: 1, text: "task 2", done:true}];

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

      self.toggleEditMode = function(){
          $(event.target).closest('li').toggleClass('editing');
      };
      
      self.editModule = function(module){
        if(event.keyCode == 13 && todo.text){
          self.toggleEditMode();
        }
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
