'use strict';
angular
  .module('Hammock')
  .controller('SearchCtrl', ['SearchService', function(SearchService) {
    var self = this;
    self.searchMode = false;
    self.results = [];

    var requestCourses = SearchService.getSearchResults();

    self.matchesSearchTerm = function(course) {
      return course.name.toLowerCase().indexOf(self.searchTerm.toLowerCase()) > -1;
    };

    self.viewCourses = function() {
      requestCourses.then(function(response){
        var courseResults = Array.from(response);
        self.searchMode = true;
        self.results = courseResults.filter(self.matchesSearchTerm);
       });
    };
 }]);
