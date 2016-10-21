

const server = require('./lib/server.js');

server.start(() => {
  console.log('server start');
});


module.exports = server;