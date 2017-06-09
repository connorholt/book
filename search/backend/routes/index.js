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

// Поиск по периоду дат
// передаем конкретный отель или по все  и интервал дат
// надо проверить еще что можно разместить определнное количество людей
// добавить максимальное и минимальное количество сколько может жить людей
// подумать на счет времени
// События получаем по очереди:
// 1. бронирование, надо закрыть даты
// 2. удаление брони, открыть даты
// 3. что-то с датами и номерами, изменить инфу
// 4. удаление блока, отелия, номера, поменять везде инфу и count
// 5. открыть продажу. добавить новые даты
// 6. закрыть продажи
// 7.
router.get('/search/period', function(req, res, next) {
    return res.json([
        {
            hotel_id: 1,
            category_id: 1,
            room_id: 2,
            date_from: new Date(),
            date_to: new Date(),
        }
    ]);
});

router.get('/search/date', function(req, res, next) {
    return res.json([
        {
            hotel_id: 1,
            category_id: 1,
            count: 2,
            date: new Date(),
        }
    ]);
});

router.get('/data/from/db', function (req, res, next) {



    db.one("SELECT $1 AS value", 456)
        .then(function (data) {
            console.log("DATA:", data.value);
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });


    return res.json(['a', 12]);
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