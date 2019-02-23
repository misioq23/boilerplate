import gulp from 'gulp';
import config from '../config';

const imgBuild = () => {
	return gulp.src(config.src.img)
		.pipe(gulp.dest(config.build.img));
};

export default imgBuild;
