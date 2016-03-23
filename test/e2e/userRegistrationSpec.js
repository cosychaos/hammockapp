describe('Hammock homepage', function() {
	beforeEach(function() {
		browser.get('http://localhost:8000');
	});

	describe ('user can register', function(){

		it('displays registration form', function(){
			$('#register').click();
			expect($('#submit-registration').isDisplayed()).toBe(true);
		});
		
		it ('can register a user', function(){
			$('#register').click();
			$('#email').sendKeys("cats@coffee.com");
			$('#password').sendKeys("password");
			$('#password_confirmation').sendKeys("password");
			$('#submit-registration').submit();
			browser.ignoreSynchronization = true;
		  browser.waitForAngular();
		  browser.sleep(5000);
		  expect(browser.getCurrentUrl()).not.toContain('register');
			expect($('#sign_out').isDisplayed()).toBe(true);
		});

		it ('returns an error if registration fails', function(){
			$('#register').click();
			$('#email').sendKeys("cats@coffee.com");
			$('#password').sendKeys("password");
			$('#password_confirmation').sendKeys("password");
			$('#submit-registration').submit();
			browser.ignoreSynchronization = true;
		  browser.waitForAngular();
		  browser.sleep(5000);
		  expect(browser.getCurrentUrl()).toContain('register');
		  expect($('.alert').getText()).toBe("Registration failed: try a different email or password");
			expect($('#sign_out').isDisplayed()).toBe(false);
		});
	});
});