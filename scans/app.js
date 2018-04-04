const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var passport = require('passport');
app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Categ =require('./models/categ');
Scan =require('./models/scan');

// Connect to Mongoose
mongoose.connect('mongodb://MapI:q565602@ds231549.mlab.com:31549/images');
var db = mongoose.connection;
var port = process.env.PORT || 8080;

app.get('/', (req, res) => {
	res.send('Please use /api/scans or /api/categs');
});

app.get('/api/categs', (req, res) => {
	Categ.getCategs((err, categs) => {
		if(err){
			throw err;
		}
		res.json(categs);
	});
});

app.post('/api/categs', (req, res) => {
	var categ = req.body;
	Categ.addCateg(categ, (err, categ) => {
		if(err){
			throw err;
		}
		res.json(categ);
	});
});

app.put('/api/categs/:_id', (req, res) => {
	var id = req.params._id;
	var categ = req.body;
	Categ.updateCateg(id, categ, {}, (err, categ) => {
		if(err){
			throw err;
		}
		res.json(categ);
	});
});

app.delete('/api/categs/:_id', (req, res) => {
	var id = req.params._id;
	Categ.removeCateg(id, (err, categ) => {
		if(err){
			throw err;
		}
		res.json(categ);
	});
});

app.get('/api/scans', (req, res) => {
	Scan.getScans((err, scans) => {
		if(err){
			throw err;
		}
		res.json(scans);
	});
});

app.get('/api/scans/:_id', (req, res) => {
	Scan.getScanById(req.params._id, (err, scan) => {
		if(err){
			throw err;
		}
		res.json(scan);
	});
});

app.post('/api/scans', (req, res) => {
	var scan = req.body;
	Scan.addScan(scan, (err, scan) => {
		if(err){
			throw err;
		}
		res.json(scan);
	});
});

app.put('/api/scans/:_id', (req, res) => {
	var id = req.params._id;
	var scan = req.body;
	Scan.updateScan(id, scan, {}, (err, scan) => {
		if(err){
			throw err;
		}
		res.json(scan);
	});
});

app.delete('/api/scans/:_id', (req, res) => {
	var id = req.params._id;
	Scan.removeScan(id, (err, scan) => {
		if(err){
			throw err;
		}
		res.json(scan);
	});
});

app.listen(port, () => {
	console.log('Running on port '+port);
});

