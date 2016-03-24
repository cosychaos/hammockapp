'use strict';

angular.module('Hammock')
  .controller('UserCoursesCtrl', function() {
  	var self = this;
  	self.courses = [];
  	self.requestCourses = {"courses":[{
		"name": "The joy of physics",
		"provider": "Coursera"
		},{
		"name": "The joy of math",
		"provider": "Udacity"
		},{
		"name": "The joy of programming",
		"provider": "Coursera"
		}]};
  	self.viewCourses = function() {
  		return self.requestCourses["courses"];  		
  	}
 });