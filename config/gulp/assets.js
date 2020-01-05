import { src, dest } from 'gulp';
import config from '../config';

const assetsBuild = () =>
	src(`${config.src.assets}**/*.{jpg,svg,png,ico,woff,woff2}`).pipe(dest(config.build.assets));

const assetsDist = () =>
	src(`${config.build.assets}**/*.{jpg,svg,png,ico,woff,woff2}`).pipe(dest(config.dist.assets));

export { assetsBuild, assetsDist };
