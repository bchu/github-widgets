var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT });
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        files: [
          {'github-widgets.min.js': ['github-widgets.js']}
        ]
      }
    }
  });

  grunt.registerTask('default', [
  ]);

  grunt.registerTask('build', [
    'uglify'
  ]);
};
