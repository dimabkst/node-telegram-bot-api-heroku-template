require('dotenv').config();

const config = {
    env: process.env.NODE_ENV || 'development',
    botToken: process.env.TOKEN,
    databaseUrl: process.env.DATABASE_URL || 'mongodb://localhost/bot',
    port: process.env.PORT || 27017,
    host: process.env.HOST || '0.0.0.0',
    heroku_url: process.env.HEROKU_URL
}

module.exports = config;