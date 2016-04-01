'use strict';

angular
  .module('Hammock')
  .controller('CreateCourseCtrl', ['UserCoursesService', '$rootScope', function(UserCoursesService, $rootScope) {
  	var self = this
    self.courseStatus = 'interested';

    self.addCourse = function(courseToAdd){
      UserCoursesService.addToMyCourses(courseToAdd);
    };

    // self.setEnrolled = function() {
    //   if (self.enrolled) {
    //     console.log("progress")
    //     self.courseStatus = 'in progress';
    //   }
    // };

    self.createCourse = function(){
     	var course = {name: self.courseName, 
                    url:self.courseUrl, 
                    image:self.imageUrl, 
                    status:self.courseStatus};
      self.addCourse(course);
      $rootScope.$emit("newCourseCreated");
    };
}]);
