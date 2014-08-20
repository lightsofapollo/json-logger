json-logger
===========

Super simple logger (similar to debug) prints newline delimited json to stdout.

## Usage

```js
var log = require('json-logger')({
  user: 'foobar'
});

log('critical error', { message: 'You failed.' });
// will log
// { type; 'critical error', message: 'you failed', user: 'foobar' }
```

See the [examples](/examples) folder for usage the output is tested
there as well...
