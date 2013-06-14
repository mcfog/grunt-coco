/*
 * grunt-coco
 * https://github.com/McFog/grunt-coco
 *
 * Copyright (c) 2013 McFog
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('coco', 'Compile Coco files into Javascript.', function() {
    var Coco = require('coco');
    var options = this.options({
      bare: false,
      join: false,
      globals: [],
      separator: grunt.util.linefeed
    });
    var compile = function(filepath) {
      if (grunt.util._.isString(filepath)) {
        filepath = [filepath];
      }
      return Coco.compile(filepath.map(function(path) {return grunt.file.read(path)}).join(sep), options);
    };
    var sep = grunt.util.normalizelf(options.separator);
    
    if (options.globals.length !== 0) {
        console.warn('[WARN] globals option is not working properly; pending this commit: <http://git.io/t55qDQ>');
    }

    this.files.forEach(function(f) {
      var src = f.src.filter(function(filepath) {
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      });

      if (options.join) {
        src = compile(src);
      } else {
        src = src.map(compile).join(sep);
      }

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });
};
