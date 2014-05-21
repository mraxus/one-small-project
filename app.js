"use strict;"

console.log('starting application');
var App = require('./lib'),
	app = new App(80);

app.start();
