//'use strict';

var baseDir = 'app';

module.exports = {

  //This is the list of file patterns to load into the browser during testing.
  //TODO if you install a new vendor component with bower you have to write the new dependency below
  files: [
  //  baseDir + '/vendor/jquery/**/*min.js',
  //  baseDir + '/vendor/underscore/underscore.js',
  //  b//aseDir + '/vendor/bootstrap/**/*min.js',
  //  b//aseDir + '/vendor/angular/angular.js',
  //  b//aseDir + '/vendor/angular-mocks/angular-mocks.js',
  //  b//aseDir + '/vendor/angular-ui-router/release/angular-ui-router.js',
  //  baseDir + '/vendor/angular-animate/angular-animate.js',
  //  baseDir + '/vendor/angular-resource/angular-resource.js',
  //  baseDir + '/vendor/angular-cookies/angular-cookies.js',
  //  baseDir + '/vendor/angular-ui-utils/ui-utils.js',
  //  baseDir + '/vendor/angular-bootstrap/ui-bootstrap-tpls.js',
  //  baseDir + '/vendor/moment/moment.js',
  //  baseDir + '/vendor/**/*min.js',
  //  baseDir + '/modules/**/*.js',
  //  'build/tmp/*.js',
  //  baseDir + '/modules/**/*-spec.js'*/
     baseDir + '/src/suma.js',
     baseDir + '/src/test/suma.spec.js'
  ],

  //used framework
  frameworks: ['jasmine'],

  plugins: [
    'karma-chrome-launcher',
    'karma-phantomjs-launcher',
    'karma-jasmine',
    'karma-coverage',
    'karma-html-reporter',
    'karma-mocha-reporter',
    'karma-junit-reporter'
  ],

  preprocessors: {
    'app/src/*.js': 'coverage'
    'app/src/test/*.js': 'coverage'
  },

  reporters: ['mocha', 'html', 'coverage','junit'],

  coverageReporter: {
    dir: baseDir + '/test/unit-results/coverage',
    reporters: [
    {type: 'html', subdir: 'report-html'},
    { type: 'lcov', subdir: 'report-lcov'},
    ]
  },

  junitReporter: {
    outputDir: baseDir + '/test/unit-results/coverage/report-lcov-xml' 
  },

  htmlReporter: {
    outputDir: baseDir + '//test/unit-results/html'
  },

  logLevel: 'info',

  urlRoot: '/__test/',

  //used browsers (overriddeng in some gulp task)
  browsers: ['PhantomJS'],

};
