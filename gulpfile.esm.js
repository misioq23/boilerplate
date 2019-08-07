import { parallel } from 'gulp';
import { browserSync } from './config/gulp/server';
import watchFiles from './config/gulp/watcher';
import build from './config/gulp/build';

export { build };
export default parallel(watchFiles, browserSync);
