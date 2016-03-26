'use strict';

angular
  .module('Hammock')
  .controller('CreateCourseCtrl', ['UserCoursesService', function(UserCoursesService) {
  	var self = this;

    self.addCourse = function(courseToAdd){
      UserCoursesService.addToMyCourses(courseToAdd);
    };

}]);
