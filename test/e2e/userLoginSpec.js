describe('Hammock homepage', function() {
	beforeEach(function() {
		browser.get('http://localhost:8000');
	});

	describe ('user can sign', function(){

		it('on page load', function(){
			expect($('h1').getText()).toBe('Hammock');
		});

		it('displays login form', function(){
			$('#sign_in').click();
			expect($('.form-group').isDisplayed()).toBe(true);
		});

		it('can fill in user information', function(){
			$('#sign_in').click();
			$('#email').sendKeys("email@email.com");
			$('#password').sendKeys("password");
			$('#submit-login').submit();
			browser.ignoreSynchronization = true;
		  browser.waitForAngular();
		  browser.sleep(5000);
			expect($('#sign_out').isDisplayed()).toBe(true);
		});
	});
});