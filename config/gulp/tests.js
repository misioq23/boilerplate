import { Server } from 'karma';
const karma = (done) => {
	Server.start({
		configFile: require('path').resolve('./config/karma/karmaRollup.js')
	}, () => {
		done();
	});
};

export default karma;
