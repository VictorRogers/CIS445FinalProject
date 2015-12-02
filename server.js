// set up ==========================================================
var bodyParser = require('body-parser');
var express = require('express');
var app			= express();
var port		= process.env.PORT || 8012;
var mongo   = require('mongodb').MongoClient;
var BSON    = require('mongodb').BSONPure;
var ObjectID = require('mongodb').ObjectID;

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

		//Characters========================================================
		app.get('/characters', function(req, res) {
			//res.render('pages/characters', {title:'Character List'});
			var collection = db.collection('Character');
			collection.find().toArray(function(err, results) {
				if (err) 
					throw err;
				res.json(results);
			});
		});

		app.get('/characters/:id', function (req, res) {
		  console.log(req.params.id);	
			var collection = db.collection('Character');
			_id = new ObjectID(req.params.id);
		});

    app.post('/addCharacter', function(req, res) {
			var newCharacter = req.body;
			var collection = db.collection('Character');
			collection.insert(newCharacter);
		});
		//==================================================================


		//Items=============================================================
		app.get('/items', function(req, res) {
			//res.render('pages/items', {title:'Item List'});
			var collection = db.collection('Item');
			collection.find().toArray(function(err, results) {
				if (err)
				  throw err;
				res.json(results);
			});
		});

		app.post('/addItem', function(req, res) {
			var newItem = req.body;
			var collection = db.collection('Item');
			collection.insert(newItem);
		});
		//=================================================================


    //Locations ========================================================
		app.get('/locations', function(req, res) {
			//res.render('pages/locations', {title:'Location List'});
			var collection = db.collection('Location');
			collection.find().toArray(function(err, results) {
				if (err)
				  throw err;
			  res.json(results);
			});
		});

		app.post('/addLocation', function(req, res) {
			var newLocation = req.body;
			var collection = db.collection('Location');
			collection.insert(newLocation);
		});
		//==================================================================


		// listen ==========================================================
		app.listen(port);
		console.log("App listening on port " + port);
	}
	else {
		console.log(err);
	}
});


