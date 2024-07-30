const config = require('../config/bot.js');

class Telegram {

  static instance = null;

  constructor() {
    if (!Telegram.instance) {
      Telegram.instance = new (require('node-telegram-bot-api'))(config.token, {polling: true});
    }

    return Telegram.instance;
  }

}

module.exports = Telegram;