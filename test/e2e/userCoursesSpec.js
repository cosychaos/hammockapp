xdescribe('User course page', function() {
	var helper = require('./helper.js');

	beforeEach(function() {
		browser.get('http://localhost:8000');
		helper.login();
		helper.browserWait();
	});

	afterEach(function(){
		$('#sign_out').click();
	});

	describe("User courses", function() {
		it ("says my courses", function(){
			expect($('my-courses').getText()).toBe("My Courses");
			var courses = element.all(by.css('.course'));
			var firstCourse = courses.first();
		});

		it ("displays my courses in different categories", function(){
			expect($('#interested').getText()).toContain('Interesting Courses');
			var firstInterested = element.all(by.css('.interesting')).first();
			expect(firstInterested.element(by.css('.course-name')).getText()).toContain('The joy of physics');

			expect($('#current').getText()).toContain('Current Courses');
			var firstCurrent = element.all(by.css('.current')).first();
			expect(firstCurrent.element(by.css('.course-name')).getText()).toContain('The joy of maths');


			expect($('#completed').getText()).toContain('Completed Courses');
			var firstCompleted = element.all(by.css('.completed')).first();
			expect(firstCompleted.element(by.css('.course-name')).getText()).toContain('The joy of programming');
		});
	});
});
