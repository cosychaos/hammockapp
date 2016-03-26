describe('SearchCtrl', function(){
  var ctrl;

  beforeEach(function() {module('Hammock')});

  beforeEach(function() {
    inject(function($controller){
      ctrl = $controller('SearchCtrl');
    });
  });

  it("initializes with empty courses", function(){
    expect(ctrl.results.length).toEqual(0);
  });

  it("sets results to match searchterm", function(){
    ctrl.searchTerm="programming";
    ctrl.viewCourses();
    expect(ctrl.results[0].name).toEqual("The joy of programming");
  });

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
});