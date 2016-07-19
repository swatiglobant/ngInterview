//jshint strict: false
module.exports = function(config) {
	config.set({

		basePath: './app',

		files: [
			'bower_components/angular/angular.js',
			'**/*.module.js',
			'**/*.js'
		],

		exclude: [
			'bower_components/**/!(angular.js|angular-route.js|angular-mocks.js)'
		],

		autoWatch: true,

		frameworks: ['jasmine'],

		browsers: [
			// 'Chrome',
			'PhantomJS'
		],

		reporters: ['spec'],

		plugins: [
			'karma-chrome-launcher',
			'karma-firefox-launcher',
			'karma-phantomjs-launcher',
			'karma-jasmine',
			'karma-junit-reporter',
			'karma-spec-reporter'
		],

		junitReporter: {
			outputFile: 'test_out/unit.xml',
			suite: 'unit'
		}

	});
};
