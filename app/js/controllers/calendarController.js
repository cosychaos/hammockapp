'use strict'

angular
.module('Hammock')
.controller('CalendarController', ['CalendarService', function(CalendarService){
  var self = this;

  self.format = function(date, time) {
    var datetime = date + time;
    return new Date(datetime);
  };

  self.apiCall = function(){
    console.log("running");
    CalendarService.makeApiCall(self.title, self.format(self.startDate, self.startTime), self.format(self.endDate, self.endTime));
  };

}]);
