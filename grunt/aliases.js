module.exports = {
    "dev-build": ['clean:toolkit', 'compass:toolkit', 'requirejs:toolkit', 'jekyll:build'],
    "dev-spy": ['dev-build', 'watch'],

    //  standard build tasks that lints your JS
    "build": ['jshint', 'dev-build'],
    "spy": ['jshint', 'dev-spy'],
    "serve": ['build','connect:app', 'open:app', 'watch'],

    //  misc tasks
    "fonts": ['clean:css', 'clean:fonts', 'svgmin:fonts', 'webfont', 'compass:toolkit'],
    "svgs": ['svgmin:icons', 'grunticon'],

    //  testing tasks
    "test-with-coverage": ['requirejs:beautify','jekyll:build', 'blanket_mocha'],
    "test-without-coverage": ['requirejs:uglify','jekyll:build', 'mocha'],
    "test-cross-browser": ['jekyll:build','connect:cross-browser', 'exec:browserstack'],
    "test-cross-browser-live": ['jekyll:build','connect:cross-browser', 'exec:browserstack-live'],

    //  alias
    "server": ['serve'],
    "test": ['test-with-coverage'],
    "default": ['build']
};