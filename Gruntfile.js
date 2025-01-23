module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                files: {
                    "dist/css/styles.css": "src/less/styles.less"
                }
            }
        },

        copy: {
            html: {
                expand: true,
                cwd: 'src/',
                src: 'index.html',
                dest: 'dist/',
            },
            js: {
                expand: true,
                cwd: 'src/js/',
                src: '**/*.js',  // Add this to copy all JS files
                dest: 'dist/js/',
            },
            assets: {
                expand: true,
                cwd: 'src/assets/',
                src: '**',
                dest: 'dist/assets/',
            }
        },

        watch: {
            styles: {
                files: ['src/less/*.less'],
                tasks: ['less', 'copy'],
                options: {
                    spawn: false
                }
            },
            html: {
                files: ['src/index.html'],
                tasks: ['copy'],
                options: {
                    spawn: false
                }
            },
            js: {
                files: ['src/js/*.js'],
                tasks: ['copy'],
                options: {
                    spawn: false
                }
            },
            assets: {
                files: ['src/assets/**/*'],
                tasks: ['copy'],
                options: {
                    spawn: false
                }
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'dist/index.html',
                        'dist/css/*.css',
                        'dist/js/*.js',
                        'dist/assets/**/*'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './dist'
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['less', 'copy', 'browserSync', 'watch']);
};