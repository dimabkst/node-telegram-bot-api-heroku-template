const config = require('./data/config');

const express = require('express');
const bodyParser = require('body-parser');
const packageInfo = require('./package.json');


const app = express();
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.json({ version: packageInfo.version });
});

var server = app.listen(config.port, config.host, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Web server started at http://%s:%s', host, port);
});

module.exports = (bot) => {
    app.post('/' + bot.token, (req, res) => {
        bot.processUpdate(req.body);
        res.sendStatus(200);
    });
};