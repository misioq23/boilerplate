import { src, lastRun } from 'gulp';
import eslint from 'gulp-eslint';
import esLintConfig from '../eslint/.eslintrc';
import config from '../config';

const esLint = () => {
	return src(config.src.js, { since: lastRun(eslint) })
		.pipe(eslint(esLintConfig))
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
};

export default esLint;
