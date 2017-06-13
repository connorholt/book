'use strict';

const sql = require('../sql').period;

class PeriodRepository {
    constructor(db, pgp) {
        this.db = db;
        this.pgp = pgp;
    }

    all(dateFrom, dateTo, countPersons) {
        return this.db.any(sql.all, [dateFrom, dateTo, countPersons]);
    }

    total(dateFrom, dateTo, countPersons) {
        return this.db.one(sql.total, [dateFrom, dateTo, countPersons], date => +data.count);
    }

    findByHotelId(hotelId, dateFrom, dateTo, countPersons) {
        return this.db.any(sql.findByHotelId, [dateFrom, dateTo, countPersons, hotelId]);
    }

    findByCategoryId(categoryId, dateFrom, dateTo, countPersons) {
        return this.db.any(sql.findByHotelId, [dateFrom, dateTo, countPersons, categoryId]);
    }

    findByRoomId(roomId, dateFrom, dateTo, countPersons) {
        return this.db.any(sql.findByHotelId, [dateFrom, dateTo, countPersons, roomId]);
    }
}

module.exports = PeriodRepository;