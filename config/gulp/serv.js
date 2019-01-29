import browsersync from 'browser-sync';
import gulp from 'gulp';

import config from './config';

// BrowserSync
const browserSync = (done) => {
	browsersync.init(config.serv);
	done();
}

// BrowserSync Reload
const browserSyncReload = (done) => {
	browsersync.reload();
	done();
}

export { browserSync, browserSyncReload }