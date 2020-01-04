import { src, dest } from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import cleanCSS from 'gulp-clean-css';
import config from '../config';

const cssBuild = () =>
	src(config.src.scss)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(
			autoprefixer({
				cascade: false,
				grid: 'no-autoplace',
			}),
		)
		.pipe(sourcemaps.write())
		.pipe(dest(config.build.css));

const cssDist = () =>
	src(`${config.build.css}*.css`)
		.pipe(cleanCSS())
		.pipe(dest(config.dist.css));

export { cssBuild, cssDist };
