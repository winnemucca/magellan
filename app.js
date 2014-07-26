var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index', {
		
		place : 'Seville',
		explorer : 'Magellan',
		problem :false,
		link : '/canary'
		
	});
});

app.get('/canary', function(req, res) {
	res.render('index', {
		place : 'Canary Islands',
		explorer : 'Magellan',
		problem :false,
		link: '/cape'
	});
});

app.get('/cape', function(req, res) {
	res.render('index', {
		place : 'Cape Verde',
		explorer : 'Magellan',
		problem: false,
		link: '/strait'
	});
});

app.get('/strait', function(req, res) {
	res.render('index', {
		place : 'Strait of Magellan',
		explorer : 'Magellan',
		problem :false,
		link : '/guam'

	});
});

app.get('/guam', function(req, res) {
	res.render('index', {
		place : 'Guam',
		explorer : 'Magellan',
		problem :false,
		link : '/philippines'
	});
});

app.get('/philippines', function(req, res) {
	res.render('index', {
		place : 'Philippines',
		explorer : 'Magellan',
		problem : false
	});
});


app.get('/:place', function(req, res){

	var dyanmicPlace = req.params.place

	res.render('index', {
		explorer : 'Magellan',
		place : dyanmicPlace,
		problem : true
	});
});

app.post('/submission', function(req,res){
	console.log(req.body.submission);
	// res.redirect(/:place)
	
	

});







var server = app.listen(3312, function() {
	console.log('Express server listening on port ' + server.address().port);
});
