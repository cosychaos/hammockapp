(function() {
  'use strict';

  angular
    .module('Hammock')
    .service('SearchService', function($http, $q) {

      var self = this;
      var apiEndpoint = 'http://localhost:3000/courseitems';

      self.getSearchResults = function(){
        return $http({
          url: apiEndpoint,
          method: 'GET'
        }).then(function(response){
          return response.data;
        });
      };

    });

})();