// Karma configuration
// Generated on Thu Dec 15 2016 21:12:39 GMT+0100 (CET)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'app',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    // Load files to access global variables
    files: [
      {pattern: 'js/lib/polyfill.js', watched: false},
      {pattern: 'vendor/jquery/jquery.min.js', watched: false},
      {pattern: 'js/lib/config.js', watched: false},
      {pattern: 'vendor/jquery.nanoscroller/nanoscroller.js', watched: false},
      {pattern: 'vendor/angular/angular.js', watched: false},
      {pattern: 'vendor/angular/angular-mocks.js', watched: false},
      {pattern: 'vendor/angular/angular-route.js', watched: false},
      {pattern: 'vendor/angular/angular-animate.js', watched: false},
      {pattern: 'vendor/angular/angular-sanitize.js', watched: false},
      {pattern: 'vendor/angular/angular-touch.js', watched: false},
      {pattern: 'vendor/ui-bootstrap/ui-bootstrap-custom-tpls-0.12.0.js', watched: false},
      {pattern: 'vendor/angular-media-player/angular-media-player.js', watched: false},
      {pattern: 'vendor/jsbn/jsbn_combined.js', watched: false},
      {pattern: 'vendor/cryptoJS/crypto.js', watched: false},
      {pattern: 'vendor/rusha/rusha.js', watched: false},
      {pattern: 'vendor/zlib/gunzip.min.js', watched: false},
      {pattern: 'vendor/closure/long.js', watched: false},
      {pattern: 'vendor/leemon_bigint/bigint.js', watched: false},
      {pattern: 'vendor/libwebpjs/libwebp-0.2.0.js', watched: false},
      {pattern: 'vendor/angularjs-toaster/toaster.js', watched: false},
      {pattern: 'vendor/clipboard/clipboard.js', watched: false},
      {pattern: 'js/lib/utils.js', watched: false},
      {pattern: 'js/lib/bin_utils.js', watched: false},
      {pattern: 'js/lib/tl_utils.js', watched: false},
      {pattern: 'js/lib/ng_utils.js', watched: false},
      {pattern: 'js/lib/i18n.js', watched: false},
      {pattern: 'js/lib/mtproto.js', watched: false},
      {pattern: 'js/lib/mtproto_wrapper.js', watched: false},
      {pattern: 'js/locales/*.json', watched: false, served: true, included: false},
      {pattern: '../test/test-init.js', watched: false},
      'js/templates.js',  // Generated by `gulp templates`
      'js/services.js',
      'js/filters.js',
      'js/controllers.js',
      'js/directives.js',
      '../test/unit/**/*.js'
    ],


    // list of files to exclude
    exclude: [
      'js/background.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'js/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    coverageReporter: {
        type: 'text',
        dir: 'coverage/'
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
