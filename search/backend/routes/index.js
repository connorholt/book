'use strict';

const db = require('../db');

const express = require('express');
const router = express.Router();

// repositories
GET('/search/period/all', req => db.period.all(req.body.dateFrom, req.body.dateTo));



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

function POST(url, handler) {
    router.post(url, (req, res) => {
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