'use strict';

// Load plugins
import gulp from 'gulp';
import watchFiles from './config/gulp/watch';
import { Server } from 'karma';
import { browserSync, browserSyncJSON } from './config/gulp/serv';

// define complex tasks
const karma = () => {
	const server = new Server({
		configFile: __dirname + '/config/karma/default.js',
		singleRun: false
	})
	server.start()
};
const watch = gulp.parallel(watchFiles, browserSync, karma);
export const json = gulp.parallel(watchFiles, browserSyncJSON);
export default watch;
