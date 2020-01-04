import { src, dest } from 'gulp';
import htmlmin from 'gulp-htmlmin';
import config from '../config';

const htmlBuild = () => src(config.src.html).pipe(dest(config.build.html));

const htmlDist = () =>
	src(config.src.html)
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(dest(config.dist.html));

export { htmlBuild, htmlDist };
