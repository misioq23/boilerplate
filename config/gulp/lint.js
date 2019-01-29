import gulp from 'gulp';
import eslint from 'gulp-eslint';

import configEsLint from '../eslint/default';
import config from './config';
// esLint
const esLint = () => {

	return gulp.src(config.src.js)
		.pipe(eslint(configEsLint))
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
}

export default esLint;