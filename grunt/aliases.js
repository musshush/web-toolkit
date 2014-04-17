module.exports = {
    "dev-build": ['clean', 'fonts', 'compass:toolkit', 'requirejs:toolkit', 'uglify', 'jekyll:build', 'exec:move-dist'],

    //  standard build tasks that lints your JS
    "build": ['jshint', 'version_sync', 'dev-build'],
    "serve": ['build','connect:app', 'open:app', 'watch'],

    //  misc tasks
    "fonts": ['svgmin:fonts', 'webfont'],
    "svgs": ['svgmin:icons', 'grunticon'],

    //  testing tasks
    "test-with-coverage": ['blanket_mocha'],
    "test-without-coverage": ['mocha'],
    "test-cross-browser": ['jekyll:build','connect:cross-browser', 'exec:browserstack'],
    "test-cross-browser-live": ['jekyll:build','connect:cross-browser', 'exec:browserstack-live'],

    //  alias
    "server": ['serve'],
    "test": ['build', 'test-without-coverage', 'test-with-coverage'],
    "default": ['build']
};
