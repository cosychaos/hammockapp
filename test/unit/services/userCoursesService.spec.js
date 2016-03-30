describe ('userCoursesService', function(){

  beforeEach(module('Hammock'));

  beforeEach(inject(function(UserCoursesService) {
    courseService = UserCoursesService;
  }));

  describe ('getMyCourses', function(){


    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend;
      httpBackend.expectGET("http://localhost:3000/courses").respond(courses);
      httpBackend.expectGET("views/main.html").respond("fine");
    }));

    it ('returns a json object of courses', function(){
      courseService.getMyCourses()
        .then(function(response) {
          expect(response).toEqual(courses);
        });
      httpBackend.flush();
    });

  });

  describe ('addToMyCourses', function(){


    beforeEach(inject(function($httpBackend){
      httpBackend = $httpBackend;
      httpBackend.expectPOST("http://localhost:3000/courses").respond(course);
      httpBackend.expectGET("views/main.html").respond("fine");
    }));

    it ('returns a JSON object of the resource submitted', function(){
      courseService.addToMyCourses(course)
        .then(function(response){
          expect(response).toEqual(course);
        });
      httpBackend.flush();
    });

  });

  describe ('updateCourse', function(){

    beforeEach(inject(function($httpBackend){
      httpBackend = $httpBackend;
      httpBackend.expectPUT("http://localhost:3000/courses/1").respond(updatedCourse);
      httpBackend.expectGET("views/main.html").respond("fine");
    }));


    it ('returns a JSON object of the resource being updated', function(){
      courseService.updateCourse(courseToUpdate)
        .then(function(response){
          expect(response).toEqual(updatedCourse);
        });
      httpBackend.flush();
    });


  });

  describe ('deleteCourse', function(){

    beforeEach(inject(function($httpBackend){
      httpBackend = $httpBackend;
      httpBackend.expectDELETE("http://localhost:3000/courses/1").respond(204, {});
      httpBackend.expectGET("views/main.html").respond("fine");
    }));

    it ('returns a status code of 204', function(){
      courseService.deleteCourse(courseToDelete)
        .then(function(response){
          expect(response.status).toEqual(204);
        });
      httpBackend.flush();
    });




  });

});



  var course = {"courses": {
                "id": "1",
                "name": "The Joy of Physics",
                "provider": "Coursera",
                "description": "a course on physics",
                "organisation": "Coursera",
                "image": "some image URL",
                "url": "course_url",
                "status": "in progress"
              }};

  var updatedCourse = {"courses": {
                "id": "1",
                "name": "The Joy of Physics",
                "provider": "Coursera",
                "description": "a course on physics",
                "organisation": "Coursera",
                "image": "some image URL",
                "url": "course_url",
                "status": "completed"
              }};

  var courseToUpdate = {
                "id": "1",
                "status": "completed"
              };

  var courseToDelete = {
                "id": "1",
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
