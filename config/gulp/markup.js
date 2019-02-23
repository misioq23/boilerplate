import gulp from 'gulp';

import config from '../config';

const htmlBuild = () => {
	return gulp.src(config.src.html)
		.pipe(gulp.dest(config.build.html));
};

export default htmlBuild;
