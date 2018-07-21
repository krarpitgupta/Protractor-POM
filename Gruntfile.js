/*Created by Automators ""*/ 

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-protractor-coverage');
      // Project configuration.
      grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
          options: {
           configFile: "./conf/conf.js",
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
          },
          build: {
            src: 'src/<%= pkg.name %>.js',
            dest: 'build/<%= pkg.name %>.min.js'
          }
        },

        protractor_coverage: {
            options: {
              // Task-specific options go here. 
            },
            your_target: {
              // Target-specific file lists and/or options go here. 
            },
          }
      });
    
      // Load the plugin that provides the "uglify" task.
      grunt.loadNpmTasks('grunt-contrib-uglify');
    
      // Default task(s).
      grunt.registerTask('default', ['uglify']);
    
    };