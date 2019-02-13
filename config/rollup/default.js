import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import convertCJS from 'rollup-plugin-commonjs';

import config from '../gulp/config';

// rollup.config.js
export default {
	input: 'src/scripts/index.js',
	plugins: [
		replace({
			'process.env.NODE_ENV': '"production"',
		}), babel({
			exclude: 'node_modules/**',
			babelrc: false,
			presets: [
				['@babel/env',
					{
						targets: config.browsersList,
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
		file: config.build.js,
		format: 'umd'
	}
};
