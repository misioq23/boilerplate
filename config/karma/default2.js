// Karma configuration
// Generated on Mon Mar 11 2019 20:50:45 GMT+0100 (GMT+01:00)

module.exports = function (config) {
	config.set({
		plugins: [
			'karma-mocha',
			'karma-sinon-chai',
			"karma-mocha-reporter",
			'karma-coverage',
			'karma-chrome-launcher',
			require("./lib")
		],
		frameworks: ['mocha', 'sinon-chai'],
		browsers: ['ChromeHeadless'],
		reporters: ['mocha', 'coverage'],

		basePath: '../../',
		files: [{ pattern: "test/*.js", watched: false }],
		exclude: [],

		preprocessors: {
			'test/*.js': ['rollup', 'coverage']
		},

		rollupPreprocessor: {
			plugins: [],
			output: {
				format: 'iife',
				sourcemap: 'inline'
			}
		},
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: false,
		singleRun: true,
		concurrency: Infinity,

		coverageReporter: {
			type: 'text-summary'
		}
	})
}
