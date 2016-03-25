describe('UserCoursesCtrl', function(){

	var ctrl, MockUserCoursesService, scope;

	beforeEach (function(){
		MockUserCoursesService = jasmine.createSpyObj('UserCoursesService', ['getMyCourses', 'addToMyCourses', 'updateCourses']);
		module('Hammock', {UserCoursesService: MockUserCoursesService});
	});

  beforeEach(function() {
  	inject(function($controller, $rootScope, $q){
			MockUserCoursesService.getMyCourses.and.returnValue($q.when(courses));
    	ctrl = $controller('UserCoursesCtrl');
			scope = $rootScope;
    });
  });

	describe ('viewCourses', function(){

		beforeEach(inject(function($httpBackend){
			httpBackend = $httpBackend;
			httpBackend.expectGET("views/main.html").respond("fine");
		}));

		it ("sorts courses into different categories depending on the status of the course", function(){
			ctrl.viewCourses();
			scope.$apply();
			expect(ctrl.interestingCourses.length).toBe(1);
		});

		it ("sorts courses into different categories depending on the status of the course", function(){
			ctrl.viewCourses();
			scope.$apply();
			expect(ctrl.currentCourses.length).toBe(1);
		});

		it ("sorts courses into different categories depending on the status of the course", function(){
			ctrl.viewCourses();
			scope.$apply();
			expect(ctrl.completedCourses.length).toBe(1);
		});

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
