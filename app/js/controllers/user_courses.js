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
      courses.forEach(function(course){
        if (course.status === "interested"){
          self.interestingCourses.push(course);
        } else if (course.status === "in progress"){
          self.currentCourses.push(course);
        } else if (course.status === "complete") {
          self.completedCourses.push(course);
        }
      });
    };

    var resetCourses = function(){
      self.interestingCourses = [];
      self.currentCourses = [];
      self.completedCourses = [];
    };

    self.viewCourses = function() {
      resetCourses();
      sortCourses(requestCourses);
    };

    self.viewCourses();





}]);





 var courses = [{
   "name": "The joy of physics",
   "provider": "Coursera",
   "status": "interested",
   "id": "1"
   },{
   "name": "The joy of maths",
   "provider": "Udacity",
   "status": "in progress",
   "id": "2"
   },{
   "name": "The joy of programming",
   "provider": "Coursera",
   "status": "complete",
   "id": "3"
   }];
