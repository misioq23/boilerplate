import { Server } from 'karma';
const karma = () => {
	const server = new Server({
		configFile: require('path').resolve('./config/karma/default.js')
	})
	server.start()
};

export default karma;
