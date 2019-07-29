import { parallel } from 'gulp';
import { browserSync } from './config/gulp/server';
import watchFiles from './config/gulp/watcher';

export default parallel(watchFiles, browserSync);
