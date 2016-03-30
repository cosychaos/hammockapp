xdescribe('Course modules', function(){
  var helper = require('./helper.js');

  beforeEach(function() {
    browser.get('http://localhost:8000');
    helper.login();
    helper.browserWait();
  });

  describe('Modules page', function(){
    it ('displays a modules page', function(){
    $('#plan').click();
    expect(browser.getCurrentUrl()).toContain('modules');
    });
  });

  
});