var express = require('express');
var app = express();

exports.start = function(){

	app.get('/', function(req,res){

		res.send('Hello world');

	});

	app.listen(3000, function(){

		console.log('Server running');
    });

};