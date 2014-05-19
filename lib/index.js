"use strict";

var express = require("express"),
	http = require('http');

var App = function () {
	this._app = express();
	this.server = http.createServer(this._app);
};

App.prototype.start = function () {

	var app = this._app,
		port = 13337,
		self = this,

	app.configure(function () {
		app.use(app.router);
		app.use(express.errorHandler());
	});

	app.get('/ping', function (req, res) { res.send('pong'); });
	this.server.listen(port);
};
App.prototype.stop = function () { this.server.close(); }

App.prototype.test = function () { return true; };

module.exports = App;
