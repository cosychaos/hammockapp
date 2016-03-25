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

    self.viewCourses = function() {
      resetCourses();
      requestCourses.then(function(courses){
        sortCourses(courses);
      });
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
