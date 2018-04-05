'use strict';

module.exports = function(date, allDay = false) {
  return date.toISOString().replace(/(T.+Z|-)/g, '');
};
