const mongoose = require('mongoose');
const config = require('../config');


const connection = mongoose.createConnection(config.databaseUrl);

connection.on('error', error => {
    console.error(error)
});

module.exports = connection;