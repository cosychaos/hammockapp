describe('Hammock homepage', function() {
	beforeEach(function() {
		browser.get('http://localhost:8000');
	});

	describe ('on page load', function(){

		it('can sign a user in', function(){
			expect($('h1').getText()).toBe('Hello World!');
			$('#sign_in').click();
			expect($('.form_group').isDisplayed()).toBe(true);
		});
	});
});