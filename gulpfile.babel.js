'use strict';

// Load plugins
import gulp from 'gulp';
import watchFiles from './config/gulp/watch';

import { browserSync } from './config/gulp/serv';

import config from './config/gulp/config';

// define complex tasks
const watch = gulp.parallel(watchFiles, browserSync);

export default watch;
