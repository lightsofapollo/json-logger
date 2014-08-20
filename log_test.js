suite('test logs', function() {
  var fs = require('fs');
  var path = require('path');
  var exec = require('child_process').exec;
  var assert = require('assert');

  var tests = fs.readdirSync('examples/').filter(function(file) {
    return file.indexOf('.js') !== -1;
  }).map(function(file) {
    return path.resolve(__dirname + '/examples/' + file);
  });

  tests.forEach(function(testFile) {
    var dir = path.dirname(testFile);
    var file = path.basename(testFile, '.js');
    var expected = dir + '/expected/' + file;

    test(testFile, function(done) {
      var output = fs.readFileSync(expected, 'utf8');
      exec(testFile, function(err, stdout) {
        if (err) return done();
        assert.equal(stdout.trim(), output.trim());
        done();
      });
    });
  });
});
