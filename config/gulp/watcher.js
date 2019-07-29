import { watch, series } from 'gulp';
import { browserSyncReload } from './server';
import htmlBuild from './markup';
import scss from './styles';
import rollupBundle from './scripts';
import esLint from './linter';
import assetsBuild from './assets';
import config from '../config';
// Watch files
const watchFiles = () => {
	watch(config.src.html, series(htmlBuild, browserSyncReload));
	watch(config.src.scss, series(scss, browserSyncReload));
	watch(config.src.js, series(esLint, rollupBundle, browserSyncReload));
	watch(config.src.assets, series(assetsBuild, browserSyncReload));
};

export default watchFiles;
