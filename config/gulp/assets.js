import { src, dest } from 'gulp';
import config from '../config';

const assetsBuild = () => {
	return src(config.src.assets)
		.pipe(dest(config.build.assets));
};

const assetsDist = () => {
	return src(`${config.build.assets}**/*.{jpg,svg,png,ico}`)
		.pipe(dest(config.dist.assets));
};

export { assetsBuild, assetsDist };
