'use strict';

let promise = require('bluebird');
let repos = {
    period: require('./repos/period'),
};

let options = {
    promiseLib: promise,

    // Extending the database protocol with our custom repositories;
    // API: http://vitaly-t.github.io/pg-promise/global.html#event:extend
    extend: (obj, dc) => {
        // Database Context (dc) is only needed when extending multiple databases.
        // Do not use 'require()' here, because this event occurs for every task
        // and transaction being executed, which should be as fast as possible.
        obj.period = new repos.period(obj, pgp);
        // Alternatively, you can set all repositories in a loop:
        //
        // for (let r in repos) {
        //    obj[r] = new repos[r](obj, pgp);
        // }
    }
};


const pgp = require('pg-promise')(options);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = pgp(process.env[config.use_env_variable]);

// Load and initialize optional diagnostics:
const diagnostics = require('./diagnostics');
diagnostics.init(options);

// If you ever need access to the library's root (pgp object), you can do it via db.$config.pgp
// See: http://vitaly-t.github.io/pg-promise/Database.html#.$config
module.exports = db;