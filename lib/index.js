"use strict";

var express = require('express'),
	http = require('http');

var App = function () {
	this._app = express();
};

App.prototype.start = function () {

	var app = this._app,
		port = 13337,
		self = this;

	app.get('/ping', function (req, res) { res.send('pong'); });
	this.server = app.listen(port);
};
App.prototype.stop = function () { this.server.close(); }

App.prototype.test = function () { return true; };

module.exports = App;
