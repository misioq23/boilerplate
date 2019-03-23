import browsersync from 'browser-sync';

import jsonServ from '../server/default';
import config from '../config';

// BrowserSync
const browserSync = (done) => {
	browsersync.init(config.serv);
	done();
};

// BrowserSync with JSON
const browserSyncJSON = (done) => {
	browsersync.init(config.serv, jsonServ);
	done();
};

// BrowserSync Reload
const browserSyncReload = (done) => {
	browsersync.reload();
	done();
};

export { browserSyncJSON, browserSync, browserSyncReload };
