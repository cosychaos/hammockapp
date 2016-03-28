describe ('CourseModulesService', function(){

  beforeEach(module('Hammock'));

  beforeEach(inject(function(CourseModulesService) {
    courseModulesService = CourseModulesService;
  }));

  describe ('getModules', function(){

    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend;
      httpBackend.expectGET("http://localhost:3000/courses/1/course_modules").respond(course_modules);
      httpBackend.expectGET("views/main.html").respond("fine");
    }));

    it ('returns a json object of modules', function(){
      courseModulesService.getModules(1)
        .then(function(response) {
          expect(response).toEqual(course_modules);
        });
      httpBackend.flush();
    });


  });

  describe ('createModule', function(){

    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend;
      httpBackend.expectPOST("http://localhost:3000/courses/1/course_modules").respond(course_module);
      httpBackend.expectGET("views/main.html").respond("fine");
    }));

    it ('returns a JSON object of the resource submitted', function(){
      courseModulesService.createModule(course_module)
        .then(function(response){
          expect(response).toEqual(course_module);
        });
      httpBackend.flush();
    });

  });

  describe ('updateModule', function(){

    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend;
      httpBackend.expectPUT("http://localhost:3000/course_modules/1").respond(course_module);
      httpBackend.expectGET("views/main.html").respond("fine");
    }));

    it ('returns a JSON object of the resource submitted', function(){
      courseModulesService.updateModule(course_module)
      .then(function(response){
        expect(response).toEqual(course_module);
      });
      httpBackend.flush();
    });

  });

var course_modules = [{
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

var course_module = {
        "title": "sign up for the course",
        "complete": false,
        "course_id": 1,
        "id": 1
      };


});
