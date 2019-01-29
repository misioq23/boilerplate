import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import convertCJS from 'rollup-plugin-commonjs';

// rollup.config.js
export default {
	input: 'src/scripts/index.js',
	plugins: [babel({
		babelrc: false,
		presets: [
			['@babel/preset-env', {
				targets: {
					chrome: 40
				},
				useBuiltIns: 'usage'

			}]
		],
	}), nodeResolve(), convertCJS()],
	output: {
		name: "MyBundle",
		file: 'build/js/bundle.js',
		format: 'umd'
	}
};
