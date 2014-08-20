#! /usr/bin/env node

// Create a logger function an object can be given any properties here
// will be the "defaults" for the actual `log` function properties.
var log = require('../log')({
  // useful for setting global/regional defaults for a logger.
  source: 'example'
});

// values are optional
log('fatal');
// extra details are merged with the defaults.
log('additional', { woot: true });
// defaults can be overriden.
log('amazing', { source: 'another' });
