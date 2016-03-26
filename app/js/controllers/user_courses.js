'use strict';

angular
  .module('Hammock')
  .controller('UserCoursesCtrl', ['UserCoursesService', function(UserCoursesService) {
  	var self = this;

    self.interestingCourses = [];
    self.currentCourses = [];
    self.completedCourses = [];

    var requestCourses = UserCoursesService.getMyCourses();

    var sortCourses = function(courses){
      for (var i = 0; i < courses.length; i++) {
        if (courses[i].status === "interested"){
          self.interestingCourses.push(courses[i]);
        } else if (courses[i].status === "in progress"){
          self.currentCourses.push(courses[i]);
        } else if (courses[i].status === "complete") {
          self.completedCourses.push(courses[i]);
        }
      }
    };

    var resetCourses = function(){
      self.interestingCourses = [];
      self.currentCourses = [];
      self.completedCourses = [];
    };

    var viewCourses = function() {
      resetCourses();
      requestCourses.then(function(courses){
        sortCourses(courses);
      });
    };

    viewCourses();

}]);
