'use strict';

angular
  .module('Hammock')
  .controller('CreateCourseCtrl', ['UserCoursesService', function(UserCoursesService) {
  	var self = this;

    self.addCourse = function(courseToAdd){
      UserCoursesService.addToMyCourses(courseToAdd);
    };

    self.createCourse = function(){
     	var course = {name: self.courseName, url:self.courseUrl, image:self.imageUrl, status:'in progress'};
      self.addCourse(course);
    };
}]);
