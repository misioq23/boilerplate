import { init, reload } from 'browser-sync';
import config from '../config';

const browserSync = done => {
	init(config.server);
	done();
};

const browserSyncReload = done => {
	reload();
	done();
};

export { browserSync, browserSyncReload };
