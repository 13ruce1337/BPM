module.exports = function(grunt) {
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),
    execute:{
      target:{
        src:['src/bin/appcompiler.js']
      }
    },
    jshint:{
      all:[
        'src/res/*.js'
      ]
    },
    watch:{
      scripts:{
        files:['src/res/*.js'],
        tasks:['jshint','execute']
      },
      libs:{
        files:['src/libs/*.*'],
        tasks:['execute']
      }
    },
    uglify:{
      options:{
        banner:'/*! <%= pkg.name %> Build Date: <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build:{
        src:'src/res/bpm.js',
        dest:'build/bpm.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-execute');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  grunt.registerTask('build',['execute','jshint','uglify']);
  grunt.registerTask('default',['execute','jshint','watch']);
};
