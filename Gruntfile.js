module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: [{
                    expand: true,     // Enable dynamic expansion.
                    cwd: 'src/',      // Src matches are relative to this path.
                    src: ['**/*component.less'], // Actual pattern(s) to match.
                    dest: 'src',   // Destination path prefix.
                    ext: '.css',   // Dest filepaths will have this extension.
                    extDot: 'last'   // Extensions in filenames begin after the first dot
                }, {
                    src: "**/*bundle.less",
                    dest: "src/styles.css" 
                }]
            }
        },
        watch: {
            styles: {
                files: ['src/**/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.registerTask('default', ['less', 'watch']);
};