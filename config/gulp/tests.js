import { Server } from 'karma';
const karma = (done) => {
	new Server({
		configFile: require('path').resolve('./config/karma/karmaRollup.js'),
	}, (err) => {
		if (err) {
			done('Karma error!');
		} else {
			done();
		}
	}).start();
};

export default karma;
