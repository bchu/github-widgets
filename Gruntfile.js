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
