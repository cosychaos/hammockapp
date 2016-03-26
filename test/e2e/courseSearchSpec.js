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
    it ("can search for courses", function(){
      $('#add-courses').click();
      expect($('#search').isDisplayed()).toBeTruthy();
      expect($('#search-button').isDisplayed()).toBeTruthy();
    });
  });
});