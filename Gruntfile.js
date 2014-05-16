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
        files:['**/*.js','src/libs/*'],
        tasks:['jshint','execute']
      }
    }
  });

  grunt.loadNpmTasks('grunt-execute');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default',['execute','jshint','watch']);
};
