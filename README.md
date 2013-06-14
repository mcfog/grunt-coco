# grunt-coco

> Coco compiler for grunt

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-coco --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-coco');
```

## The "coco" task

### Overview
In your project's Gruntfile, add a section named `coco` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  coco: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.bare
Type: `Boolean`
Default value: `false`

Whether compile coco with `bare` option

#### options.join
Type: `Boolean`
Default value: `false`

Whether join source files _before_ compile

#### options.separator
Type: `String`
Default value: linefeed

Concatenated files will be joined on this string.

## Release History

### 0.1.1
first release.

`globals` option wont work for a known issue of coco, has been fixed at v0.9.2 but not released