module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        pug: {
            compile: {
                files: [{
                    expand: true,
                    cwd: 'src/pug',
                    src: ['*.pug'],
                    dest: 'build',
                    ext: '.html'
                }]
            }
        },

        sass: {
            dist: {
                files: {
                    'build/css/style.css': 'src/sass/style.sass'
                }
            }
        },

        watch: {
            pug: {
                files: ['src/pug/**/*.pug'],
                tasks: ['pug']
            },
            sass: {
                files: ['src/sass/**/*.sass'],
                tasks: ['sass']
            }
        },

        connect: {
            server: {
                options: {
                    port: 9000,
                    base: 'build',
                    livereload: true,
                    open: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['connect', 'watch']);
    grunt.registerTask('build', ['pug', 'sass']);
};
