(function() {
  'use strict';

  angular
    .module('Hammock')
    .service('UserCoursesService', function($http, $q) {

      var self = this;
      var apiEndPoint = 'http://localhost3000/courses';

      self.getMyCourses = function(){
        return $http({
          url: apiEndPoint,
          method: 'GET'
        }).then(function(response){
          return response.data.courses;
        });
      };

      self.addToMyCourses = function(course){
        var data = JSON.stringify(course);
        return $http({
          url: apiEndPoint,
          method: 'POST',
          data: data
        }).then(function(response){
          return response.data;
        });
      };
      //
      self.updateCourse = function(course){
        var data = JSON.stringify(course.status);
          return $http({
            url: apiEndPoint + "/" + course.id,
            method: 'PATCH',
            data: data
          }).then(function(response){
            return response.data;
          });
      };

  });






}());
