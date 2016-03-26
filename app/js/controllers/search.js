'use strict';

angular.module('Hammock')
  .controller('SearchCtrl', function() {
    var self = this;

    self.results = [];

    self.requestCourses = {"courses": courses};

    self.matchesSearchTerm = function(course) {
      return course.name.indexOf(self.searchTerm) > -1;
    }

    self.viewCourses = function() {
      self.results = self.requestCourses.courses.filter(self.matchesSearchTerm);
    };
 });

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