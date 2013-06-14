/*
 * grunt-coco
 * https://github.com/McFog/grunt-coco
 *
 * Copyright (c) 2013 McFog
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    coco: {
      compileDefault: {
        options: {
        },
        files: {
          'tmp/default/example.js': ['test/fixtures/example.co']
        }
      },
      compileBare: {
        options: {
            bare: true
        },
        files: {
          'tmp/bare/example.js': ['test/fixtures/example.co']
        }
      },
      compileBareGlobal: {
        options: {
            bare: true,
            globals: ['SpecialStuff']
        },
        files: {
          'tmp/bareglobal/example.js': ['test/fixtures/example.co']
        }
      },
      compileMultiple: {
        options: {
        },
        files: {
          'tmp/multiple/example.js': ['test/fixtures/example.co', 'test/fixtures/example2.co']
        }
      },
      compileJoin: {
        options: {
            join: true
        },
        files: {
          'tmp/multiple/example.js': ['test/fixtures/example.co', 'test/fixtures/example2.co']
        }      
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'coco', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
