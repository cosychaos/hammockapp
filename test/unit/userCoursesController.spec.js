describe('UserCoursesCtrl', function(){
	var ctrl;

	beforeEach(function() {module('Hammock')}
		);

  beforeEach(function() {
  	inject(function($controller){
    	ctrl = $controller('UserCoursesCtrl');
    });
  });

  it("initializes with empty courses", function(){
		expect(ctrl.courses.length).toEqual(0);
	});

	// var course1 = {
	// 	"name": "The joy of physics",
	// 	"provider": "Coursera",
	// 	"organisation": "MIT"
	// }



});