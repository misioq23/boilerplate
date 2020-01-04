import { watch, series } from 'gulp';
import { browserSyncReload } from './server';
import { htmlBuild } from './markup';
import { cssBuild } from './styles';
import { rollupBundle } from './scripts';
import { assetsBuild } from './assets';
import config from '../config';

const watchFiles = () => {
	watch(config.src.html, series(htmlBuild, browserSyncReload));
	watch(config.src.scss, series(cssBuild, browserSyncReload));
	watch(config.src.js, series(rollupBundle, browserSyncReload));
	watch(config.src.assets, series(assetsBuild, browserSyncReload));
};

export default watchFiles;
