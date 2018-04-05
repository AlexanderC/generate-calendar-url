'use strict';

var url = require('url');
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

  return url.format({
    protocol: 'https',
    host: 'www.google.com',
    pathname: '/calendar/render',
    query: {
      action: 'TEMPLATE',
      text: evt.title,
      dates: formatTime(evt.start, evt.allDay) + '/' + formatTime(evt.end, evt.allDay),
      details: evt.description,
      location: evt.location
    }
  });
};
