describe('User course page', function() {
	var helper = require('./helper.js');

	beforeEach(function() {
		browser.get('http://localhost:8000');
		helper.login();
		helper.browserWait();
	});

	describe("User courses", function() {
		it ("says my courses", function(){
			expect($('h2').getText()).toBe("My Courses");
			var courses = element.all(by.css('.course'));
			var firstCourse = courses.first();

			var firstCourseName = firstCourse.element(by.css('.course-name'));
			expect(firstCourseName.getText()).toBe('The joy of physics');

			var firstCourseProvider = firstCourse.element(by.css('.course-provider'));
			expect(firstCourseProvider.getText()).toBe('Coursera');
		});
	});
});