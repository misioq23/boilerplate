import jsonServer from 'json-server';

import config from '../config';

export default (err, bs) => {
	// access the browserSync connect instance
	const server = jsonServer.create();
	server.use(jsonServer.defaults());
	server.use(jsonServer.router(config.json.dir));

	bs.app.use(server);
};
