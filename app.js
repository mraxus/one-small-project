"use strict;"

console.log('starting application');
var App = require('./lib'),
	app = new App(1337);

app.start();
