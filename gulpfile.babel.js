'use strict';

// Load plugins
import gulp from 'gulp';
import watchFiles from './config/gulp/watch';

import { browserSync, browserSyncJSON } from './config/gulp/serv';

// define complex tasks
export const json = gulp.parallel(watchFiles, browserSyncJSON);
export default gulp.parallel(watchFiles, browserSync);
