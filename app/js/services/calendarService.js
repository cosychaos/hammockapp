(function() {
  'use strict';

  angular
    .module('Hammock')
    .service('CalendarService', function() {

    var self = this;
    var clientId = '781827135293-f81rqrqhgrlhpljjpku0buhh7v3ncviu.apps.googleusercontent.com';
    var apiKey = 'AIzaSyA218YVzUquJwfth2ibOgv8mtmQoAeytSc';

    var scopes = 'https://www.googleapis.com/auth/calendar';

    // OAuth2 functions
    self.handleClientLoad= function() {
      gapi.client.setApiKey(apiKey);
      window.setTimeout(checkAuth, 1);
    };

    //To authenticate
    self.checkAuth = function() {
      gapi.auth.authorize({ client_id: clientId, scope: scopes, immediate: true }, handleAuthResult);
    };

    self.makeApiCall = function(lesson, start, end){
      gapi.client.load('calendar', 'v3', function () { // load the calendar api (version 3)
        var request = gapi.client.calendar.events.insert
        ({'calendarId': 'primary',
        // calendar ID which id of Google Calendar where you are creating events. this can be copied from your Google Calendar user view
          "resource": { "summary": lesson,
                        "start": {
                          "dateTime": start
                        },
                        "end": {
                          "dateTime": end
                        },
                      }
        });
      });
    };
  });
})();
