import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import config from '../config';

const rollupConfig = {
	input: config.rollup.input,
	output: {
		file: config.rollup.output,
		format: config.rollup.bundleFormat,
		sourcemap: true,
	},
	plugins: [
		resolve(),
		babel({
			exclude: 'node_modules/**',
			babelHelpers: 'bundled',
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
