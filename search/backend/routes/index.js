'use strict';

const db = require('../db');

const express = require('express');
const router = express.Router();

// repositories
GET('/search/period/all', req => db.period.all(
    req.body.date_from,
    req.body.date_to,
    req.body.count_persons
));

GET('/search/period/total', req => db.period.total(
    req.body.date_from,
    req.body.date_to,
    req.body.count_persons
));

GET('/search/period/findByHotelId', req => db.period.findByHotelId(
    req.body.hotel_id,
    req.body.date_from,
    req.body.date_to,
    req.body.count_persons
));

GET('/search/period/findByCategoryId', req => db.period.findByCategoryId(
    req.body.category_id,
    req.body.date_from,
    req.body.date_to,
    req.body.count_persons
));

GET('/search/period/findByRoomId', req => db.period.findByRoomId(
    req.body.room_id,
    req.body.date_from,
    req.body.date_to,
    req.body.count_persons
));


// global functions
function GET(url, handler) {
    router.get(url, (req, res) => {
        handler(req)
            .then(data => {
                res.json({
                    success: true,
                    data
                });
            })
            .catch(error => {
                res.json({
                    success: false,
                    error: error.message || error
                });
            });
    });
}

module.exports = router;