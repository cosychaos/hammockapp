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
		});
	});
});