const models = require('./models');
const connection = require('./connection');


const db = {
    connection
};

Object.keys(models).forEach((modelName) => {
    db[modelName] = connection.model(modelName, models[modelName]);
});

module.exports = {
    db
};