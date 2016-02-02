var express = require('express');
var app = express();

var port = process.env.PORT || 3000;


exports.start = function(){

	app.get('/', function(req,res){

		res.send('Hello world');

	});

	app.use('/site', express.static('site'));

	app.listen(port, function(){

		console.log('Server running');
    });

};