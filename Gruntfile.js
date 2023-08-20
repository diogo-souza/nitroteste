module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    babel: {
      options: {
        presets: ['@babel/preset-react']
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'src',
          src: [
            'components/DataFormatter.js',
            'pages/SearchPage.js',
            'App.js',
            'index.js'
          ],
          dest: 'dist/js'
        }]
      }
    },
    uglify: {
      options: {
        mangle: true,
        compress: true,
        sourceMap: true
      },
      my_target: {
        files: {
          'dist/js/app.min.js': [
            'dist/js/App.js',
            'dist/js/index.js',
            'dist/js/SearchPage.js',
            'dist/js/DataFormatter.js'
          ]
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed' 
        },
        files: {
          'dist/css/styles.min.css': [
            'src/App.scss',
            'src/index.scss',
            'src/pages/SearchPage.scss'
          ]
        }
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

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('default', ['babel', 'uglify', 'sass', 'htmlmin']);
};
