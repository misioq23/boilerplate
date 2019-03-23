/* gulp-config.js */
export default {

	serv: {
		server: {
			baseDir: 'build/'
		},
		port: 3000
	},

	json: {
		dir: 'config/server/db.json'
	},

	src: {
		html: 'src/markup/*.html',
		scss: 'src/scss/**/**/*.scss',
		js: 'src/scripts/**/*.js',
		tests: 'test/**/*.js',
		img: 'src/images/*.{jpg,svg,png}',
	},

	build: {
		html: 'build/',
		css: 'build/css/',
		js: 'build/js/bundle.js',
		img: 'build/img/',
		name: 'example',
		bundleFormat: 'iife'
	},

	browsersList: [
		'last 1 version',
		// 'chrome > 70',
		// '> 0.001% in PL',
		// 'ie > 8',
	]
};
