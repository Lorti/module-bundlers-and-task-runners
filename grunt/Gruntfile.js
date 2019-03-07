module.exports = function (grunt) {

    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'dist/styles.css': ['main.scss']
                }
            }
        },
        concat: {
            dist: {
                src: ['main.js', 'index.js'],
                dest: 'dist/bundle.js'
            },
        },
        uglify: {
            dist: {
                src: 'dist/bundle.js',
                dest: 'dist/bundle.js'
            }
        },
        watch: {
            css: {
                files: './*.scss',
                tasks: ['build-css']
            },
            js: {
                files: './*.js',
                tasks: ['build-js'],
                options: {
                    debounceDelay: 250
                }
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build-css', [
        'sass'
    ]);

    grunt.registerTask('build-js', [
        'concat:dist',
        'uglify:dist'
    ]);

    grunt.registerTask('default', ['build-css', 'build-js']);

};
