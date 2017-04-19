module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'node_modules/moment/moment.js',
            'tests/moment-timezone-with-data.js',
            'moment-dt.js',
            'tests/moment-dt.spec.js'
        ],
        exclude: [],
        reporters: ['progress', 'coverage', 'coveralls'],
        port: 8080,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-global-preprocessor',
            'karma-coverage',
            'karma-coveralls',
            'karma-eslint'
        ],
        globals: {
            packageVersion: require('./package.json').version
        },
        preprocessors: {
            'tests/moment-dt.spec.js': ['global', 'eslint'],
            'moment-dt.js': ['coverage', 'eslint']
        },
        coverageReporter: {
            reporters: [
                { type: 'lcov',  dir: 'coverage/'},
                { type: 'text' }
            ]
        },
        eslint: {
            stopOnError: false,
            stopOnWarning: false,
            showWarnings: true,
            engine: {
                configFile: '.eslintrc'
            }
        },
        singleRun: false
    });
};