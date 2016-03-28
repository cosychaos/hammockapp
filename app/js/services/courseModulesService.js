(function() {
  'use strict';

  angular
    .module('Hammock')
    .service('CourseModulesService', function($http, $q) {

    var self = this;
    var apiEndPoint = 'http://localhost:3000/';
    var apiCoursesEndPoint = apiEndPoint + 'courses/';
    var apiModulesEndPoint = apiEndPoint + 'course_modules/';

    self.getModules = function(courseId){
      return $http({
        url: apiCoursesEndPoint + courseId +'/course_modules',
        method: 'GET'
        }).then(function(response){
          return response.data;
        });
    };

    self.createModule = function(course_module){
      var data = JSON.stringify({"course_module": course_module});
      return $http({
          url: apiCoursesEndPoint + course_module.course_id + '/course_modules',
          method: 'POST',
          data: data,
          headers: {'Content-Type': 'application/json'}
        }).then(function(response){
          return response.data;
        });
    };

    self.updateModule = function(course_module){
      var data = JSON.stringify({"course_module": course_module});
      return $http({
        url: apiModulesEndPoint + course_module.id,
        method: 'PUT',
        data: data,
        headers: {'Content-Type': 'application/json'}
        }).then(function(response){
          return response.data;
        });
    };





    });

})();
