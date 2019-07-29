import { src, dest } from 'gulp';
import config from '../config';

const assetsBuild = () => {
	return src(config.src.assets)
		.pipe(dest(config.build.assets));
};

export default assetsBuild;
