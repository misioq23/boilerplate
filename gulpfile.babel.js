'use strict';

// Load plugins
import gulp from 'gulp';
import watchFiles from './config/gulp/watch';

import { browserSync, browserSyncJSON } from './config/gulp/serv';

// define complex tasks
const watch = gulp.parallel(watchFiles, browserSync);

export const json = gulp.parallel(watchFiles, browserSyncJSON);
export default watch;
