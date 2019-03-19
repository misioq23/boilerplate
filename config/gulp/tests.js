import { Server } from 'karma';
const karma = (done) => {
	new Server({
		configFile: require('path').resolve('./config/karma/karma.conf.js'),
	}, (err) => {
		if (err) {
			done('Test error!');
		} else {
			done();
		}
	}).start();
};

export default karma;
