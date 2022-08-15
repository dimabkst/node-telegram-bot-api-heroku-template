const telegramBot = require('node-telegram-bot-api');
const config = require('./config');

const { db } = require('./database');

const {
    handleEcho
} = require('./handlers');


const TOKEN = config.botToken;
let bot;
if (config.env === 'production') {
    bot = new telegramBot(TOKEN);
    bot.setWebHook(config.heroku_url + bot.token);
} else {
    bot = new telegramBot(TOKEN, { polling: true });
}


bot.onText(new RegExp(), handleEcho(bot));


module.exports = bot;