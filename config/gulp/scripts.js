import gulp from 'gulp';
import { rollup } from 'rollup';
import sourcemaps from 'gulp-sourcemaps';

import configRollup from '../rollup/default';
import config from './config';

const jsBundle = () => {
	return rollup({
		input: configRollup.input,
		plugins: configRollup.plugins
	}).then((bundle) => {
		return bundle.write(configRollup.output);
	});
};

export default jsBundle;