// set up ===============================================================================
var bodyParser = require('body-parser');
var express    = require('express');
var app	       = express();
var port		   = process.env.PORT || 8012;
var mongo      = require('mongodb').MongoClient;
var BSON       = require('mongodb').BSONPure;
var ObjectID   = require('mongodb').ObjectID;

// configuration ========================================================================
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

		//Characters==========================================================================
		app.get('/characters', function(req, res) {
			//res.render('pages/characters', {title:'Character List'});
			var collection = db.collection('Character');
			collection.find().toArray(function(err, results) {
				if (err) {
					console.log(err);
				}
				res.json(results);
			});
		});

		app.get('/characters/:id', function (req, res) {
			var collection = db.collection('Character');
			collection.findOne({ "_id" : new ObjectID(req.params.id)}, function (err, result) {
				res.json(result);
			});
		});

    app.post('/addCharacter', function(req, res) {
			var newCharacter = req.body;
			var collection = db.collection('Character');
			collection.insert(newCharacter);
		});

		app.put('/characters/:id', function(req, res) {
			var charData = req.body;
			var collection = db.collection('Character');
			collection.update({ "_id" : new ObjectID(req.params.id)}, charData);
		});

		app.delete('/characters/:id', function(req, res) {
      var collection = db.collection('Character');
			collection.remove({ "_id" : new ObjectID(req.params.id)});
		});
		//===================================================================================


		//Items==============================================================================
		app.get('/items', function(req, res) {
			//res.render('pages/items', {title:'Item List'});
			var collection = db.collection('Item');
			collection.find().toArray(function(err, results) {
				if (err)
				  throw err;
				res.json(results);
			});
		});

		app.get('/items/:id', function (req, res) {
			var collection = db.collection('Item');
			collection.findOne({ "_id" : new ObjectID(req.params.id)}, function (err, result) {
				res.json(result);
			});
		});

		app.post('/addItem', function(req, res) {
			var newItem = req.body;
			var collection = db.collection('Item');
			collection.insert(newItem);
		});

		app.put('/items/:id', function(req, res) {
			var itemData = req.body;
			var collection = db.collection('Item');
			collection.update({ "_id" : new ObjectID(req.params.id)}, itemData);
		});

		app.delete('/items/:id', function(req, res) {
      var collection = db.collection('Item');
			collection.remove({ "_id" : new ObjectID(req.params.id)});
		});
		//===================================================================================


    //Locations =========================================================================
		app.get('/locations', function(req, res) {
			//res.render('pages/locations', {title:'Location List'});
			var collection = db.collection('Location');
			collection.find().toArray(function(err, results) {
				if (err)
				  throw err;
			  res.json(results);
			});
		});

		app.get('/locations/:id', function (req, res) {
			var collection = db.collection('Location');
			collection.findOne({ "_id" : new ObjectID(req.params.id)}, function (err, result) {
				res.json(result);
			});
		});

		app.post('/addLocation', function(req, res) {
			var newLocation = req.body;
			var collection = db.collection('Location');
			collection.insert(newLocation);
		});

		app.put('/locations/:id', function(req, res) {
			var locationData = req.body;
			var collection = db.collection('Location');
			collection.update({ "_id" : new ObjectID(req.params.id)}, locationData);
		});

		app.delete('/locations/:id', function(req, res) {
      var collection = db.collection('Location');
			collection.remove({ "_id" : new ObjectID(req.params.id)});
		});
		//===================================================================================


		// listen ===========================================================================
		app.listen(port);
		console.log("App listening on port " + port);
	}
	else {
		console.log(err);
	}
});


