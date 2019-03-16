// Karma configuration
// Generated on Mon Mar 11 2019 20:50:45 GMT+0100 (GMT+01:00)
const babel = require('rollup-plugin-babel');
const replace = require('rollup-plugin-replace');
const resolve = require('rollup-plugin-node-resolve');
const convertCJS = require('rollup-plugin-commonjs');
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
		logLevel: config.LOG_INFO,
		autoWatch: false,
		singleRun: true,
		concurrency: Infinity,

		coverageReporter: {
			type: 'text-summary'
		}
	})
}
