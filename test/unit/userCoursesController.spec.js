xdescribe('UserCoursesCtrl', function(){
	var ctrl;

	beforeEach(function() {module('Hammock')});

  beforeEach(function() {
  	inject(function($controller){
    	ctrl = $controller('UserCoursesCtrl');
    });
  });

  it("initializes with empty courses", function(){
		expect(ctrl.interested_courses.length).toEqual(0);
	});

  xit("returns courses", function(){
		expect(ctrl.viewCourses()).toEqual(courses);
	});

	it ("sorts courses into different categories depending on the status of the course", function(){
		ctrl.viewCourses();
		expect(ctrl.interested_courses.length).toBe(1);
	});

	it ("sorts courses into different categories depending on the status of the course", function(){
		ctrl.viewCourses();
		expect(ctrl.current_courses.length).toBe(1);
	});

	it ("sorts courses into different categories depending on the status of the course", function(){
		ctrl.viewCourses();
		expect(ctrl.completed_courses.length).toBe(1);
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
});
