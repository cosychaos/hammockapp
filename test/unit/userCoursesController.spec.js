describe('UserCoursesCtrl', function(){
	var ctrl;

	beforeEach(function() {module('Hammock')});

  beforeEach(function() {
  	inject(function($controller){
    	ctrl = $controller('UserCoursesCtrl');
    });
  });

  it("initializes with empty courses", function(){
		expect(ctrl.courses.length).toEqual(0);
	});

  it("returns courses", function(){
		expect(ctrl.viewCourses()).toEqual(courses);
	});

	var courses = [{
		"name": "The joy of physics",
		"provider": "Coursera"
		},{
		"name": "The joy of math",
		"provider": "Udacity"
		},{
		"name": "The joy of programming",
		"provider": "Coursera"
		}];
});