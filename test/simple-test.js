"use strict";

var test = require('tape'),

		App = require('../');

test('Make this one test run and we are all happy.', function (t) {
  var app = new App();

	t.ok(app.test());
	t.end();
});
