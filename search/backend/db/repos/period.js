'use strict';

const sql = require('../sql').period;

class PeriodRepository {
    constructor(db, pgp) {
        this.db = db;
        this.pgp = pgp;
    }

    all(dateFrom, dateTo) {
        return this.db.any(sql.all, [dateFrom, dateTo]);
    }

    total() {
        return this.db.one('SELECT count(*) FROM search_periods', [], a => +a.count);
    }

    findByHotelId(name) {
        return this.db.oneOrNone('SELECT * FROM search_periods WHERE hotel_id = $1', name);
    }

    findByCategoryId(name) {
        return this.db.oneOrNone('SELECT * FROM search_periods WHERE name = $1', name);
    }

    findByRoomId(name) {
        return this.db.oneOrNone('SELECT * FROM search_periods WHERE name = $1', name);
    }
}

module.exports = PeriodRepository;