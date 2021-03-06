module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.initConfig({
		uglify: {
			my_target : {
				files: {
					'_/javascript/script.js' : ['_/components/javascript/*.js'] // the file inside components is going to get compressed into the first javascript file listed 
				} // files, first will be the destination of your finished javascript files, 2nd are the files that we want to process 
			} // my_target 
		}, // uglify (what we want grunt to take care of)
		compass: {
			dev: { 
				options: {
					config: 'config.rb'
				} // options
			} // dev 
		}, // compass
		watch: {
			options: { livereload: true },
			scripts: {
				files: ['_/components/javascript/*.js'], //files we want to work with
				tasks: ['uglify']  // what we want to do with the files
			},	// scripts
			sass: { 
				files: ['_/components/sass/*.scss'],
				tasks: ['compass:dev']
			}, // sass
			html: {
				files: ['*.html']
			}
		} // watch (list of files we want to watch)
	}) // initconfig (what we want grunt to do)
	grunt.registerTask('default', 'watch');
} // exports