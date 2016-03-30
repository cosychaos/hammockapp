'use strict';

angular
  .module('Hammock')
  .controller('UserCoursesCtrl', ['UserCoursesService', function(UserCoursesService) {
  	var self = this;

    self.courses = [[],[],[]];

    self.updateCourse = function(courseToUpdate){
      UserCoursesService.updateCourse(courseToUpdate).then(
        function() {
          viewCourses();
        });
      };

    var requestCourses = function() {
      return UserCoursesService.getMyCourses();
      console.log("request sent");
    }

    var sortCourses = function(courses){
      for (var i = 0; i < courses.length; i++) {
        if (courses[i].status === "interested"){
          self.courses[0].push(courses[i]);
        } else if (courses[i].status === "in progress"){
          self.courses[1].push(courses[i]);
        } else if (courses[i].status === "complete") {
          self.courses[2].push(courses[i]);
        }
      }
    };

    var resetCourses = function(){
      self.courses = [[],[],[]];
    };

    var viewCourses = function() {
      resetCourses();
      requestCourses().then(function(courses){
        sortCourses(courses);
      });
    };

    viewCourses();

}]);
