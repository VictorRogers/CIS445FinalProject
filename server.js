'use strict';

// set up ==========================================================
var express = require('express');
var app			= express();
var port		= process.env.PORT || 8012;

// configuration ===================================================
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

// pages
app.get('/', function(req, res) {
    res.render('pages/index', {title:'Index Page'});
});
app.get('/characters', function(req, res) {
    res.render('pages/characters', {title:'Character List'});
});
app.get('/items', function(req, res) {
    res.render('pages/items', {title:'Item List'});
});
app.get('/locations', function(req, res) {
    res.render('pages/locations', {title:'Location List'});
});

// listen ==========================================================
app.listen(port);
console.log("App listening on port " + port);