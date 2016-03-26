describe('Search', function(){
  var helper = require('./helper.js');

  beforeEach(function() {
    browser.get('http://localhost:8000');
    helper.login();
    helper.browserWait();
  });

  afterEach(function(){
    $('#sign_out').click();
  });

  describe("User", function() {
    it ("can search for courses and see correct results", function(){
      $('#add-courses').click();
      expect($('#search').isDisplayed()).toBeTruthy();
      expect($('#search-button').isDisplayed()).toBeTruthy();
      $('#search').sendKeys('maths');
      $('#search-button').click();
      expect($('#result').getText()).toContain('The joy of maths');
      expect($('#result').getText()).not.toContain('The joy of physics');
    });
  });
});