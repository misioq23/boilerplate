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
		failOnEmptyTestSuite: false,
		frameworks: ['mocha', 'sinon-chai'],
		browsers: ['ChromeHeadless'],
		reporters: ['mocha', 'coverage'],
		coverageReporter: {
			includeAllSources: true,
			dir: 'coverage/',
			reporters: [
				{ type: "html", subdir: "html" },
				{ type: 'text-summary' }
			]
		},
		basePath: '../../',
		files: ['test/*.js'],
		exclude: [],

		preprocessors: {
			'test/*.js': ['rollup']
		},
		rollupPreprocessor: {
			plugins: [
				replace({
					'process.env.NODE_ENV': '"production"',
				}), resolve({
					jsnext: true,
					preferBuiltins: true,
					browser: true
				}), babel({
					exclude: 'node_modules/**',
					babelrc: false,
					presets: ['@babel/env'],
					plugins: ['istanbul']
				}),
				convertCJS()
			],
			output: {
				sourcemap: 'inline',
				format: 'cjs'
			}
		},
		port: 9876,
		colors: true,
		autoWatch: false,
		singleRun: true,
		logLevel: config.LOG_ERROR,
		concurrency: Infinity,
	})
}
