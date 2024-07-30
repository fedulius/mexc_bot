const lib = require('./lib');
const bot = lib.bot;


bot.on('message', (msg) => {
  console.log(msg);
})

