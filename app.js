const express = require('express');
const {MongoClient, ObjectId} = require('mongodb');
const bodyParser = require('body-parser');
const request = require('request');

var app = express();
app.use(bodyParser.json());

var db = null
MongoClient.connect('mongodb+srv://symptom00:VN1RNRYWPu23Jx7R@cluster0.vfufp.mongodb.net/hatershub-db?retryWrites=true&w=majority', function(err,database) {
	if (err) {
    	console.error('An error occurred connecting to MongoDB: ', err);
    }
    db = database.db('hatershub-db');

    app.get('/')
});
/*MongoClient.connect('mongodb+srv://admin:admin@cluster0-5vple.mongodb.net/test?retryWrites=true&w=majority', function(err,database) {
    db = database.db('microcosmos-db');
});*/

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Bienvenue sur HATERSHUB');
});



app.get('/comment/get/:id', (req, res) => {
	var id = req.params.id;
    db.collection('comment').findOne({ _id : ObjectId(id) }, function(err, results) {
		res.send(results);
	});
});



app.listen(process.env.PORT || 3000);

