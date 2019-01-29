import gulp from 'gulp';
import {browserSyncReload} from './serv';
import htmlBuild from './markup';
import scss from './styles';
import jsBundle from './scripts';
import imgBuild from './img';
import esLint from './lint';

import config from './config';

// Watch files
const watchFiles = () => {
	gulp.watch(config.src.scss, gulp.series(scss, browserSyncReload));
	gulp.watch(config.src.js, gulp.series(esLint, jsBundle, browserSyncReload));
	gulp.watch(config.src.html, gulp.series(htmlBuild, browserSyncReload));
	gulp.watch(config.src.img, gulp.series(imgBuild, browserSyncReload));
}

export default watchFiles;