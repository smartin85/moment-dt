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
        port: 8080,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-global-preprocessor'
        ],
        globals: {
            packageVersion: require('./package.json').version
        },
        preprocessors: {
            'tests/moment-dt.spec.js': ['global']
        },
        singleRun: false
    });
};