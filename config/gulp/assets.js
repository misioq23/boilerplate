import { src, dest, lastRun } from 'gulp';
import config from '../config';

const assetsBuild = () => {
	return src(config.src.assets, { since: lastRun(assetsBuild) })
		.pipe(dest(config.build.assets));
};

const assetsDist = () => {
	return src(`${config.build.assets}**/*.{jpg,svg,png,ico}`)
		.pipe(dest(config.dist.assets));
};

export { assetsBuild, assetsDist };
