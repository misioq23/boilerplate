// Karma configuration
// Generated on Mon Mar 11 2019 20:50:45 GMT+0100 (GMT+01:00)
const babel = require('rollup-plugin-babel');
const replace = require('rollup-plugin-replace');
const resolve = require('rollup-plugin-node-resolve');
const convertCJS = require('rollup-plugin-commonjs');
module.exports = function (config) {
	config.set({
		plugins: [
			'karma-chrome-launcher',
			'karma-coverage',
			'karma-mocha',
			'karma-mocha-reporter',
			'karma-rollup-preprocessor',
			'karma-sinon-chai',
		],
		frameworks: ['mocha', 'sinon-chai'],
		browsers: ['ChromeHeadless'],
		reporters: ['mocha', 'coverage'],
		failOnEmptyTestSuite: false,

		basePath: '../../',
		files: [{ pattern: 'test/*.js', watched: false }],
		exclude: [],

		preprocessors: {
			'test/*.js': ['rollup', 'coverage']
		},

		rollupPreprocessor: {
			plugins: [
				replace({
					'process.env.NODE_ENV': '"production"',
				}), babel({
					exclude: 'node_modules/**',
					babelrc: false,
					presets: [
						['@babel/env',
							{
								targets: ['chrome > 70'],
								useBuiltIns: 'usage'
							}
						]
					]
				}), resolve({
					jsnext: true,
					preferBuiltins: true,
					browser: true
				}), convertCJS()
			],
			output: {
				sourcemap: true,
				format: 'iife'
			}
		},
		port: 9876,
		colors: true,
		logLevel: config.LOG_ERROR,
		autoWatch: false,
		singleRun: true,
		concurrency: Infinity,

		coverageReporter: {
			type: 'text-summary'
		}
	})
}
