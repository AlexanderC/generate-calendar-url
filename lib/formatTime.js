'use strict';

module.exports = function(date, allDay) {
  if (allDay) {
    return date.toISOString().replace(/(T.+Z|-)/g, '');
  }
  
  return date.toISOString().replace(/-|:|\.\d+/g, '');
};
