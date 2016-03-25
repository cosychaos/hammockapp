'use strict';

angular.module('Hammock')
  .controller('UserCoursesCtrl', function() {
  	var self = this;

    self.interested_courses = [];
    self.current_courses = [];
    self.completed_courses = [];

  	self.requestCourses = {"courses": courses};

  	self.viewCourses = function() {
      sortCourses(self.requestCourses.courses);
    };

    var sortCourses = function(courses){
      courses.forEach(function(course){
        if (course.status === "interested"){
          self.interested_courses.push(course);
        } else if (course.status === "in progress"){
          self.current_courses.push(course);
        } else if (course.status === "complete") {
          self.completed_courses.push(course);
        }
      });
    };



 });





 var courses = [{
   "name": "The joy of physics",
   "provider": "Coursera",
   "status": "interested"
   },{
   "name": "The joy of maths",
   "provider": "Udacity",
   "status": "in progress"
   },{
   "name": "The joy of programming",
   "provider": "Coursera",
   "status": "complete"
   }];
