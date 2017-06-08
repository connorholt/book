var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var client = mongodb.MongoClient;

var uri = "mongodb://mongo/search_web";

const pgp = require('pg-promise')();
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = pgp(process.env[config.use_env_variable]);

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/data/from/db', function (req, res, next) {



    db.one("SELECT $1 AS value", 55)
        .then(function (data) {
            console.log("DATA:", data.value);
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });


    return res.json(['a', 33]);
});

router.post('/data/into/db', function(req, res, next) {
    client.connect(uri, function (err, db) {
        if (err) return next(err);
        var collection = db.collection('dummy');
        collection.insertMany(req.body, function(err, result) {
            return res.json({ result: "success" });
        });
    });
});

module.exports = router;