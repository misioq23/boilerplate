import browsersync from 'browser-sync';
import jsonServer from 'json-server';

import config from './config';

const jsonServ = (err, bs) => {
	// access the browserSync connect instance
	const server = jsonServer.create();
	server.use(jsonServer.defaults());
	server.use(jsonServer.router('config/server/db.json'));

	bs.app.use(server);
}

// BrowserSync
const browserSync = (done) => {
	browsersync.init(config.serv);
	done();
}

//BrowserSync with JSON
const browserSyncJSON = (done) => {
	browsersync.init(config.serv, jsonServ);
	done();
}

// BrowserSync Reload
const browserSyncReload = (done) => {
	browsersync.reload();
	done();
}

export { browserSyncJSON, browserSync, browserSyncReload }
