module.exports = function(grunt) {
  grunt.initConfig({
    execute:{
      tartget:{
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
    }
  });

  grunt.loadNpmTasks('grunt-execute');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default',['execute','jshint','watch']);
};
