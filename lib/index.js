module.exports = {
  userRegistry: () => new (require('./UserRegistry'))(),
  bot: new (require('./Telegram.js'))()
}