import { src, dest } from 'gulp';
import config from '../config';

const htmlBuild = () => {
	return src(config.src.html)
		.pipe(dest(config.build.html));
};

export default htmlBuild;
