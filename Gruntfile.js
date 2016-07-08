module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 8080,
          base: 'www',
          keepalive: true
        }
      }
    },
    concat: {
      js: {
        src: ['src/js/*.js'],
        dest: 'www/js/dist.js',
      },
      css: {
        src: ['src/css/*.css'],
        dest: 'www/css/dist.css',
      },
    },
    watch: {
      css: {
        files: 'src/css/*.css',
        tasks: ['concat:css'],
        options: {
          livereload: true
        }
      },
      js: {
        files: 'src/js/*.js',
        tasks: ['concat:js'],
        options: {
          livereload: true
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['connect']);
  grunt.registerTask('watch', ['watch']);

};