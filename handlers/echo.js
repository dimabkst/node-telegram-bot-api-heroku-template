module.exports = (bot) => {
    return function (msg, match) {
        const entities = msg?.entities;
        if (!(entities && msg?.entities[0]?.type == 'bot_command')) {
            bot.sendMessage(msg.chat.id, `Echo: ${msg.text}`, { reply_to_message_id: (msg.chat.type != "private") ? msg.message_id : false });
        }
    }
};