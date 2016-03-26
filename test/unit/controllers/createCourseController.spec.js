describe ('CreateCourseContoller.spec.js', function(){

  var ctrl, MockUserCoursesService, scope;

  beforeEach (function(){
    MockUserCoursesService = jasmine.createSpyObj('UserCoursesService', ['getMyCourses', 'addToMyCourses', 'updateCourse']);
    module('Hammock', {UserCoursesService: MockUserCoursesService});
  });

  beforeEach(function() {
    inject(function($controller, $rootScope, $q){
      MockUserCoursesService.getMyCourses.and.returnValue($q.when(courses));
      ctrl = $controller('CreateCourseCtrl');
      scope = $rootScope;
    });
  });

  describe ('#addCourse', function(){

    it ('sends a request to the CoursesService to make a course', function(){
      ctrl.addCourse(courseToAdd);
      expect(MockUserCoursesService.addToMyCourses).toHaveBeenCalledWith(courseToAdd);
    });


  });



var courseToAdd = {
                    "id": "1",
                  };




});
