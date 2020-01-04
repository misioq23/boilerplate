import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import config from '../config';

const rollupConfig = {
	input: config.rollup.input,
	output: {
		file: config.rollup.output,
		format: config.rollup.bundleFormat,
		sourcemap: true,
	},
	plugins: [
		replace({
			'process.env.NODE_ENV': '"production"',
		}),
		resolve({
			mainFields: ['jsnext'],
			browser: true,
		}),
		babel({
			exclude: 'node_modules/**',
			presets: [
				[
					'@babel/preset-env',
					{
						debug: false,
						useBuiltIns: 'usage',
						corejs: { version: 3, proposals: true },
					},
				],
			],
		}),
		commonjs(),
	],
};

export default rollupConfig;
