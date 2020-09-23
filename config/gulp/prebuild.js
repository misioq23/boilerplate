import { series } from 'gulp';
import { rollupBundle } from './scripts';
import { htmlBuild } from './markup';
import { assetsBuild } from './assets';
import { cssBuild } from './styles';

export default series(
	htmlBuild,
	cssBuild,
	rollupBundle,
	assetsBuild,
);
