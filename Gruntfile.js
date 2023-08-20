module.exports = function (grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
        options: {
          mangle: true,
          compress: true,
          sourceMap: true
        },
        my_target: {
          files: {
            'dist/js/app.min.js': ['src/App.js', 'src/index.js', 'src/pages/SearchPage.js', 'src/components/DataFormatter.js']
          }
        }
      },
      sass: {
        dist: {
          options: {
            style: 'compressed' 
          },
          files: {
            'dist/css/styles.min.css': ['src/App.scss', 'src/index.scss', 'src/pages/SearchPage.scss']
          }
        }
      },
      concat: {
        dist: {
          src: ['src/App.js', 'src/index.js', 'src/pages/SearchPage.js', 'src/components/DataFormatter.js'],
          dest: 'dist/js/bundle.js'
        }
      },
      htmlmin: {
        dist: {
          options: {
            removeComments: true,
            collapseWhitespace: true
          },
          files: {
            'dist/index.html': 'public/index.html'
          }
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
  
    grunt.registerTask('default', ['uglify', 'sass', 'concat', 'htmlmin']);
  };
  