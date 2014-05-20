"use strict";

var express = require('express'),
	http = require('http');

var App = function (port) {
	this._port = port;
	this._app = express();
};

App.prototype.start = function () {

	var app = this._app,
		port = this._port,
		self = this;

	app.get('/ping', function (req, res) {
		console.log('/ping requested.');
		res.send('pong');
	});
	console.log('starting server at port ' + port);
	this.server = app.listen(port);
};
App.prototype.stop = function () { this.server.close(); }

App.prototype.test = function () { return true; };

module.exports = App;
