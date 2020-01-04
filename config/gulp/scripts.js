import { src, dest } from 'gulp';
import { rollup } from 'rollup';
import terser from 'gulp-terser';
import configRollup from '../rollup/rollup.config';
import config from '../config';

const input = {
	input: configRollup.input,
	plugins: configRollup.plugins,
};

const rollupBundle = async () => {
	const bundle = await rollup(input);
	return bundle.write(configRollup.output);
};

const jsDist = () =>
	src(config.rollup.output)
		.pipe(terser())
		.pipe(dest(config.dist.js));

export { rollupBundle, jsDist };
