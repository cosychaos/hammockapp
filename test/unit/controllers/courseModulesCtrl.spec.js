describe('CourseModulesCtrl', function(){

	var ctrl, MockCourseModulesService, scope;

	beforeEach (function(){
		MockCourseModulesService = jasmine.createSpyObj('CourseModulesService', ['getModules', 'createModule', 'updateModule', 'deleteModule']);
		module('Hammock', {CourseModulesService: MockCourseModulesService});
	});

  beforeEach(function() {
  	inject(function($controller, $rootScope, $q){
			MockCourseModulesService.getModules.and.returnValue($q.when(modules));
			MockCourseModulesService.createModule.and.returnValue($q.when(moduleToAdd));
			MockCourseModulesService.updateModule.and.returnValue($q.when(courseModule));
    	ctrl = $controller('CourseModulesCtrl');
			scope = $rootScope;
    });
  });

  beforeEach(inject(function($httpBackend){
    httpBackend = $httpBackend;
    httpBackend.expectGET("views/main.html").respond("fine");
}));


  it("initializes with the modules for that course", function(){
    scope.$apply();
    expect(ctrl.modules.length).toEqual(3);
  });

	describe ('#addModule', function(){

		it ('sends a request to the CoursesService to make a course', function(){
			ctrl.addModule(moduleToAdd);
			expect(MockCourseModulesService.createCourses).toHaveBeenCalledWith(moduleToAdd);
		});

	});

	describe ('#updateModule', function(){

	});

	describe ('#deleteModule', function(){

	});

});


var modules = [{
      "title": "sign up for the course",
      "complete": true
    },
    {
      "title": "Complete work for week 1",
      "complete": false
    },
    {
      "title": "Read up on programming",
      "complete": false
    }];

var courseModule = {
        "title": "sign up for the course",
        "complete": false,
        "course_id": 1,
        "id": 1
      };

var moduleToAdd = {
				"title": "do some homework",
				"complete": false,
				"course_id": 1
			};
