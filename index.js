const config = require('./config');
const bot = require('./bot');

if (config.env === 'production') {
    require('./web')(bot);
} else {
    // pass
}
