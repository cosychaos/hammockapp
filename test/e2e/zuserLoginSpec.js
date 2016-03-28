xdescribe('Hammock homepage', function() {
	beforeEach(function() {
		browser.get('http://localhost:8000');
	});

	describe ('user can sign', function(){

		it('on page load', function(){
			expect($('h1').getText()).toBe('Hammock');
		});

		it('displays login form', function(){
			$('#sign_in').click();
			expect($('#submit-login').isDisplayed()).toBe(true);
		});

		it('can sign in a registered user', function(){
			$('#sign_in').click();
			$('#email').sendKeys("email@email.com");
			$('#password').sendKeys("password");
			$('#submit-login').submit();
			browser.ignoreSynchronization = true;
		  browser.waitForAngular();
		  browser.sleep(7000);
		  expect(browser.getCurrentUrl()).not.toContain('sign_in');
			$('#sign_out').click();
		});

		it('returns an error if wrong credentials', function(){
			expect($('#sign_in').isDisplayed()).toBe(true);
			$('#sign_in').click();
			expect(browser.getCurrentUrl()).toContain('sign_in');
			$('#email').sendKeys("email@email.com");
			$('#password').sendKeys("1234");
			$('#submit-login').submit();
			browser.ignoreSynchronization = true;
		  browser.waitForAngular();
		  browser.sleep(5000);
		  expect($('.alert').getText()).toBe("Invalid login credentials. Please try again.");
		  expect(browser.getCurrentUrl()).toContain('sign_in');
			expect($('#sign_out').isDisplayed()).toBe(false);
		});
	});
});
