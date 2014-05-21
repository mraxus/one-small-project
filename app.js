"use strict;"

console.log('starting application');
var App = require('./lib'),
	app = new App(8081);

app.start();
