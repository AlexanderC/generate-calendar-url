'use strict';

var defaults = require('lodash.defaults');
var formatTime = require('./formatTime');

module.exports = function(event) {
  var evt = defaults(event, {
    title: '',
    start: '',
    end: '',
    description: '',
    location: '',
    allDay: false,
  });

  var data = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    //'URL:' + document.URL,
    'DTSTART:' + formatTime(evt.start, evt.allDay),
    'DTEND:' + formatTime(evt.end, evt.allDay),
    'SUMMARY:' + evt.title,
    'DESCRIPTION:' + evt.description,
    'LOCATION:' + evt.location,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\n');

  return encodeURI('data:text/calendar;charset=utf8,' + data);
};
