describe('Hammock homepage', function() {
	beforeEach(function() {
		browser.get('http://localhost:8000');
	});

	describe ('on page load', function(){

		it('displays hello world', function(){
			expect($('h1').getText()).toBe('Hello World!');
		});
	});
});