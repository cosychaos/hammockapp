describe('UserCoursesCtrl', function(){

	var ctrl, MockUserCoursesService, scope;

	beforeEach (function(){
		MockUserCoursesService = jasmine.createSpyObj('UserCoursesService', ['getMyCourses', 'addToMyCourses', 'updateCourse']);
		module('Hammock', {UserCoursesService: MockUserCoursesService});
	});

  beforeEach(function() {
  	inject(function($controller, $rootScope, $q){
			MockUserCoursesService.getMyCourses.and.returnValue($q.when(courses));
    	ctrl = $controller('UserCoursesCtrl');
			scope = $rootScope;
    });
  });

	describe ('on initilization', function(){

		beforeEach(inject(function($httpBackend){
			httpBackend = $httpBackend;
			httpBackend.expectGET("views/main.html").respond("fine");
		}));

		it ("sorts courses into different categories depending on the status of the course", function(){
			scope.$apply();
			expect(ctrl.courses[0].length).toBe(1);
		});

		it ("sorts courses into different categories depending on the status of the course", function(){
			scope.$apply();
			expect(ctrl.courses[1].length).toBe(1);
		});

		it ("sorts courses into different categories depending on the status of the course", function(){
			scope.$apply();
			expect(ctrl.courses[2].length).toBe(1);
		});

	});

	describe ('#updateCourse', function(){

		beforeEach(inject(function($httpBackend){
			httpBackend = $httpBackend;
			httpBackend.expectGET("views/main.html").respond("fine");
		}));

		it ("passes the request to the userCoursesService", function(){
			ctrl.updateCourse(courseToUpdate);
			scope.$apply();
			expect(MockUserCoursesService.updateCourse).toHaveBeenCalled();
		});

		it ("moves the course if the status has been changed", function(){
			scope.$apply();
			expect(ctrl.courses[0].length).toBe(1);
			inject(function($q){
				MockUserCoursesService.getMyCourses.and.returnValue($q.when(updatedCourses), function(){
					ctrl.updateCourse(courseToUpdate);
					expect(ctrl.courses[2].length).toBe(2);
					expect(ctrl.courses[1].length).toBe(1);
					expect(ctrl.courses[0].length).toBe(0);
				});
			});
		});

	});


	var courseToUpdate = {
                "id": "1",
                "status": "completed"
              	};

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

var updatedCourses = [{
		"name": "The joy of physics",
		"provider": "Coursera",
		"status": "complete",
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
