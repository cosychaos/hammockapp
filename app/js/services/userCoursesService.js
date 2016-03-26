(function() {
  'use strict';

  angular
    .module('Hammock')
    .service('UserCoursesService', function($http, $q) {

      var self = this;
      var apiEndPoint = 'http://localhost:3000/courses';

      self.getMyCourses = function(){
        return $http({
          url: apiEndPoint,
          method: 'GET'
        }).then(function(response){
          return response.data;
        });
      };

      self.addToMyCourses = function(course){
        var data = JSON.stringify({"course": course});
        return $http({
          url: apiEndPoint,
          method: 'POST',
          data: data,
          headers: {'Content-Type': 'application/json'}
        }).then(function(response){
          return response.data;
        });
      };
      //
      self.updateCourse = function(course){
        var data = JSON.stringify({course: course});
          return $http({
            url: apiEndPoint + "/" + course.id,
            method: 'PUT',
            data: data,
            headers: {'Content-Type': 'application/json'}
          }).then(function(response){
            return response.data;
          });
      };

  });






}());
