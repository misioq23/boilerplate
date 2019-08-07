import { src, dest, lastRun } from 'gulp';
import htmlmin from 'gulp-htmlmin';
import config from '../config';

const htmlBuild = () => {
	return src(config.src.html, { since: lastRun(htmlBuild) })
		.pipe(dest(config.build.html));
};

const htmlDist = () => {
	return src(config.src.html)
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(dest(config.dist.html));
};

export { htmlBuild, htmlDist };
