describe('SearchCtrl', function(){
  var ctrl, MockSearchService, scope;

  beforeEach (function(){
    MockSearchService = jasmine.createSpyObj('SearchService', ['getSearchResults']);
    module('Hammock', {SearchService: MockSearchService});
  });

  beforeEach(function() {
    inject(function($controller, $rootScope, $q){
      MockSearchService.getSearchResults.and.returnValue($q.when(courseitems));
      ctrl = $controller('SearchCtrl');
      scope = $rootScope;
    });
  });

  beforeEach(inject(function($httpBackend){
    httpBackend = $httpBackend;
    httpBackend.expectGET("views/main.html").respond("fine");
}));


  it("initializes with empty courses", function(){
    scope.$apply();
    expect(ctrl.results.length).toEqual(0);
  });

  it("sets results to match searchterm", function(){
    ctrl.searchTerm="programming";
    ctrl.viewCourses();
    scope.$apply();
    expect(ctrl.results[0].name).toEqual("The joy of programming");
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
});