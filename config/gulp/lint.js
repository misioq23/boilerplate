import gulp from 'gulp';
import eslint from 'gulp-eslint';

import configEsLint from '../eslint/default';
import config from '../config';
// esLint
const jsLint = () => {
	return gulp.src(config.src.js)
		.pipe(eslint(configEsLint))
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
};
const jsLintTest = () => {
	return gulp.src(config.src.tests)
		.pipe(eslint(configEsLint))
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
};

export { jsLint, jsLintTest };
