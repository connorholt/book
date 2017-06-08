'use strict';

var dbm;
var type;
var seed;

var async = require('async');
/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = function (db) {

    return db.createTable('search_periods', {
        id: {type: 'int', primaryKey: true},
        hotel_id: 'int',
        category_id: 'int',
        room_id: 'int',
        date_from: 'timestamp',
        date_to: 'timestamp'
    })
        .then(
            function (result) {
                db.createTable('search_dates', {
                    id: {type: 'int', primaryKey: true},
                    hotel_id: 'int',
                    category_id: 'int',
                    date: 'timestamp',
                    count_room: 'int'
                });
            },
            function (err) {
                return;
            }
        );
};

exports.down = function (db) {
    return db.dropTable('search_periods')
        .then(
            function(result) {
                db.dropTable('search_dates');
            },
            function(err) {
                return;
            }
        );
};

function callback() {
    return true;
}

exports._meta = {
    "version": 1
};
