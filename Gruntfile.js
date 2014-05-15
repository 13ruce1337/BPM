module.exports = function(grunt) {
  grunt.initConfig({
    jshint:{
      all:[
        'src/res/*.js'
      ]
    },
    watch:{
      scripts:{
        files:['**/*.js'],
        tasks:['jshint']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default',['jshint','watch']);
};
