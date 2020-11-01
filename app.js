const express = require('express');
const {MongoClient, ObjectId} = require('mongodb');
const bodyParser = require('body-parser');
const request = require('request');

var app = express();
app.use(bodyParser.json());

var db = null
MongoClient.connect('mongodb://root00:root00@ds263172.mlab.com:63172/hatershub', function(err,database) {
    db = database.db('hatershub');
});
/*MongoClient.connect('mongodb+srv://admin:admin@cluster0-5vple.mongodb.net/test?retryWrites=true&w=majority', function(err,database) {
    db = database.db('microcosmos-db');
});*/

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Bienvenue sur MICROCOSMOS');
});



app.get('/comment/get/:id', (req, res) => {
	var id = req.params.id;
    db.collection('comment').findOne({ _id : ObjectId(id) }, function(err, results) {
		res.send(results);
	});
});



app.listen(process.env.PORT || 3000);