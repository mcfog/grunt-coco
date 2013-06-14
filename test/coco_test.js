'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.coco = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  compileDefault: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default/example.js');
    var expected = grunt.file.read('test/expected/default/example.js');
    test.equal(actual, expected, 'should compile coco file.');

    test.done();
  },
  compileBare: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/bare/example.js');
    var expected = grunt.file.read('test/expected/bare/example.js');
    test.equal(actual, expected, 'should make result javascript bare.');

    test.done();
  },
  compileBareGlobal: function(test) {  
    console.warn('[WARN] globals option is not working properly; pending this commit: <http://git.io/t55qDQ>');
    // test.expect(1);

    var actual = grunt.file.read('tmp/bareglobal/example.js');
    var expected = grunt.file.read('test/expected/bareglobal/example.js');
    // test.equal(actual, expected, 'should expose vars specified in `globals`.');

    test.done();
  },
  compileMultiple: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/multiple/example.js');
    var expected = grunt.file.read('test/expected/multiple/example.js');
    test.equal(actual, expected, 'should compile multiple source and merge them.');

    test.done();
  }
};
