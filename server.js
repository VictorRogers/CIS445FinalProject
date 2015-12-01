// set up ==========================================================
var bodyParser = require('body-parser');
var express = require('express');
var app			= express();
var port		= process.env.PORT || 8012;
var mongo   = require('mongodb').MongoClient;

// configuration ===================================================
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongo.connect("mongodb://localhost:27017/onlineGaming", function(err, db) {
	if (!err) {
		console.log("Connected to mongo");
		// pages
		app.get('/', function(req, res) {
			//res.render('pages/index', {title:'Index Page'});
		});

		app.get('/characters', function(req, res) {
			//res.render('pages/characters', {title:'Character List'});
			var collection = db.collection('Character');
			collection.find().toArray(function(err, results) {
			if (err) throw err;
				res.json(results);
			});
		});

		app.post('/character', function(req, res) {
      console.log(req.body);
		});

		app.get('/items', function(req, res) {
			//res.render('pages/items', {title:'Item List'});
		});

		app.get('/locations', function(req, res) {
			//res.render('pages/locations', {title:'Location List'});
		});

		// listen ==========================================================
		app.listen(port);
		console.log("App listening on port " + port);
	}
	else {
		console.log(err);
	}
});


