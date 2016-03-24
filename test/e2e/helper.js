module.exports = {
	login: function() {$('#sign_in').click();
											$('#email').sendKeys("email@email.com");
											$('#password').sendKeys("password");
											$('#submit-login').submit();},
	browserWait: function() {browser.ignoreSynchronization = true;
  												browser.waitForAngular();
  												browser.sleep(4000);}
}