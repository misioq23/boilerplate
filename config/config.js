const config = {
	server: {
		server: {
			baseDir: 'build/',
		},
		port: 3000,
	},

	src: {
		html: 'src/*.html',
		scss: 'src/scss/**/**/*.scss',
		js: 'src/js/**/*.js',
		assets: 'src/assets/**/*.{jpg,svg,png,ico}',
		test: 'test/**/*.js',
	},

	build: {
		html: 'build/',
		css: 'build/css/',
		js: 'build/js/',
		assets: 'build/assets/',
	},

	dist: {
		html: 'dist/',
		css: 'dist/css/',
		js: 'dist/js/',
		assets: 'dist/assets/',
	},

	rollup: {
		input: 'src/js/index.js',
		output: 'build/js/bundle.js',
		bundleFormat: 'iife',
	},
};

export default config;
