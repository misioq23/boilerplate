'use strict';

// Load plugins
import gulp from 'gulp';
import watchFiles from './config/gulp/watch';
import karmaTest from './config/gulp/tests';
import { browserSync, browserSyncJSON } from './config/gulp/serv';

// define complex tasks
export const karma = gulp.parallel(watchFiles, browserSync, karmaTest);
export const json = gulp.parallel(watchFiles, browserSyncJSON);
export default gulp.parallel(watchFiles, browserSync);
