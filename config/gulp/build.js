import { series } from 'gulp';
import remove from './remove';
import { rollupBundle, jsDist } from './scripts';
import { htmlBuild, htmlDist } from './markup';
import { assetsBuild, assetsDist } from './assets';
import { cssBuild, cssDist } from './styles';

export default series(
	remove,
	series(htmlBuild, htmlDist),
	series(cssBuild, cssDist),
	series(rollupBundle, jsDist),
	series(assetsBuild, assetsDist),
);
