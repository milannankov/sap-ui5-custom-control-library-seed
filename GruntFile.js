module.exports = function (grunt) {

    grunt.initConfig({

        connect: {
            options: {
                port: 8080,
                hostname: '*'
            },
            src: {},
            dist: {}
        },

        dir: {
            src: 'src',
            dest: 'dist',
        },

        clean: {
            dist: '<%= dir.dest %>/**'
        },

        copy: {
            required: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ['**/*.js', '**/.library'],
                        dest: 'dist/'
                    },
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ['**/*.js', '**/.library'],
                        dest: 'webapp/'
                    }]
            }
        },

        openui5_connect: {
            options: {
                resources: [
                    'bower_components/openui5-sap.ui.core/resources',
                    'bower_components/openui5-sap.m/resources',
                    'bower_components/openui5-themelib_sap_belize/resources'
                ],
                testresources: [
                    'bower_components/openui5-sap.ui.core/test-resources',
                    'bower_components/openui5-sap.m/test-resources',
                    'bower_components/openui5-themelib_sap_belize/test-resources'
                ],
                cors: {
                    origin: 'http://localhost:8080'
                }
            },
            src: {
                options: {
                    appresources: 'webapp'
                }
            }
        },

        openui5_preload: {
            library: {
                options: {
                    resources: [
                        { cwd: '<%= dir.src %>' }
                    ],
                    dest: '<%= dir.dest %>',
                    compatVersion: '1.44',
                    compress: false
                },
                libraries: 'custom/ui5'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-openui5');

    grunt.registerTask('serve', ['build', 'openui5_connect:src:keepalive']);
    grunt.registerTask('watch', ['dir:src']);

    // Build task
    grunt.registerTask('build', [
        'clean',
        'copy',
        'openui5_preload'
    ]);

    // Default task
    grunt.registerTask('default', ['build']);

};