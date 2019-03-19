import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import convertCJS from 'rollup-plugin-commonjs';

import config from '../config';

// rollup.config.js
export default {
	input: 'src/scripts/index.js',
	plugins: [
		replace({
			'process.env.NODE_ENV': '"production"',
		}), resolve({
			jsnext: true,
			preferBuiltins: true,
			browser: true
		}), babel({
			exclude: 'node_modules/**',
			plugins: ['@babel/plugin-transform-runtime'],
			babelrc: false,
			runtimeHelpers: true,
			presets: [
				['@babel/env',
					{
						debug: true,
						targets: config.browsersList,
						useBuiltIns: 'usage'
					}
				]
			]
		}), convertCJS()
	],
	output: {
		file: config.build.js,
		name: config.build.name,
		sourcemap: true,
		format: config.build.bundleFormat
	}
};
