const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    telegram_id: {
        type: Number,
        required: "User Telegram id is required",
        unique: "User Telegram id should be unique"
    },
    first_name: String,
    last_name: String,
    username: String,
    is_bot: Boolean,
    language_code: String
});


module.exports = userSchema