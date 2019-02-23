import autoprefixer from 'gulp-autoprefixer';
import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

import config from '../config';

// SCSS task
const scss = () => {
	return gulp
		.src(config.src.scss)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: config.browsersList,
			cascade: false
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.build.css));
};

export default scss;
