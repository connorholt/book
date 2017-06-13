'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.addColumn('search_periods', 'count_persons_min', { type: 'int' }).then(
      db.addColumn('search_periods', 'count_persons_max', { type: 'int' })
  );
};

exports.down = function(db) {
  return db.removeColumn('search_periods', 'count_persons_min').then(
      db.removeColumn('search_periods', 'count_persons_max')
  );
};

exports._meta = {
  "version": 1
};
