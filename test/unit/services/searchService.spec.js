describe ('SearchService', function() {

  beforeEach(module('Hammock'));

  beforeEach(inject(function(SearchService) {
    search = SearchService;
  }));

  describe ('search courses', function() {

    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend;
      httpBackend.expectGET("http://localhost:3000/courseitems").respond(courseitems);
      httpBackend.expectGET("views/main.html").respond("fine");
    }));

    it ('returns a json object of course items', function(){
      search.getSearchResults().then(function(response) {
        expect(response).toEqual(courseitems);
      });
      httpBackend.flush();
    });

  });
});

  var courseitems = [{
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