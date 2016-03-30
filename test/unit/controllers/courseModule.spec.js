describe('CourseModuleCtrl', function(){

	var ctrl, MockCourseModulesService, scope;

	beforeEach (function(){
		MockCourseModulesService = jasmine.createSpyObj('CourseModulesService', ['getModules', 'createModule', 'updateModule', 'deleteModule']);
		module('Hammock', {CourseModulesService: MockCourseModulesService});
	});

  beforeEach(function() {
  	inject(function($controller, $rootScope, $q){
			MockCourseModulesService.editModule.and.returnValue($q.when(modules));
    	ctrl = $controller('CourseModuleCtrl');
			scope = $rootScope;
    });
  });

  beforeEach(inject(function($httpBackend){
    httpBackend = $httpBackend;
    httpBackend.expectGET("views/main.html").respond("fine");
}));


  it("initializes with empty modules", function(){
    scope.$apply();
    expect(ctrl.modules.length).toEqual(0);
  });
});