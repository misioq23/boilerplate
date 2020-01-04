import { parallel, series } from 'gulp';
import { rollupBundle, jsDist } from './scripts';
import { htmlBuild, htmlDist } from './markup';
import { assetsBuild, assetsDist } from './assets';
import { cssBuild, cssDist } from './styles';

export default parallel(
	series(htmlBuild, htmlDist),
	series(cssBuild, cssDist),
	series(rollupBundle, jsDist),
	series(assetsBuild, assetsDist),
);
