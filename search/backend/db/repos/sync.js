/**
 * репозиторий синхронизации, удаляет отели, блоки, категории. изменяет кол-во человек
 */
'use strict';

const sql = require('../sql').sync;

class SyncRepository {
    constructor(db, pgp) {
        this.db = db;
        this.pgp = pgp;
    }

    deleteByHotelId() {
        return this.db.one('');
    }

    deleteByCategoryId() {
        return this.db.one('');
    }

    deleteByRoomId() {
        return this.db.one('');
    }

    deleteEarlyThen() {
        return this.db.one('');
    }

    updateCountPersonsByCategoryId() {
        return this.db.one('');
    }
}

module.exports = SyncRepository;