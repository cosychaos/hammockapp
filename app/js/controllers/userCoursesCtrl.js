'use strict';

angular
  .module('Hammock')
  .controller('UserCoursesCtrl', ['UserCoursesService', function(UserCoursesService) {

    var self = this;
    self.courses = [];

    self.updateCourse = function(courseToUpdate){
      UserCoursesService.updateCourse(courseToUpdate).then(viewCourses);
    };

    self.deleteCourse = function(courseToDelete) {
      UserCoursesService.deleteCourse(courseToDelete).then(viewCourses);
    };

    var requestCourses = function() {
      return UserCoursesService.getMyCourses();
    }

    var viewCourses = function() {
      requestCourses().then(function(courses){
        self.courses = courses;
      });
    };

    viewCourses();

}]);
