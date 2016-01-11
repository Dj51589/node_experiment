'use strict';

var express = require('express'),
	app = express(),
	path = require('path');

app.use(express.static(path.join(__dirname, '')));



// app.get('/details', function (req, res) {
// 	res.render('detail.html');
// });

app.get('/', function (req, res) {
	res.render('index.html');
});

app.get('/save', function (req, res) {
	res.json(200, { success: 'node js route calling' });
});

app.listen(process.env.PORT || 8888);