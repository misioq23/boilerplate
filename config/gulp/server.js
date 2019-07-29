import { init, reload } from 'browser-sync';
import config from '../config';

// BrowserSync
const browserSync = done => {
	init(config.server);
	done();
};

// BrowserSync Reload
const browserSyncReload = done => {
	reload();
	done();
};

export { browserSync, browserSyncReload };
