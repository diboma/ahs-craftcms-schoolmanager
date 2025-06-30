const gulp = require('gulp');
const browserSync = require('browser-sync').create();

/*
 * CHANGE THIS ACCORDING TO YOUR PROJECT
 * TIP: you can make this a fixed port by adding the following to the .ddev/config.yaml file:
 * host_webserver_port: "9001"
 */
const url = 'http://127.0.0.1:9001';

/*
 * This function only includes the most basic browser-sync settings needed
 * to get a watch server running. Please refer to the browser-sync docs for other
 * available options.
 */
const startServer = function (done) {
  // Initialize BrowserSync
  browserSync.init({
    proxy: url,
    // host: url,
    // port: 3000,
  });
  gulp
    .watch(['web/css/**/*', 'templates/**/*']) // CHANGE THIS ACCORDING TO YOUR NEEDS
    .on('change', browserSync.reload);
  done();
};

exports.startServer = startServer;
