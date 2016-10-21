'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const server = new Hapi.Server();

module.exports.start = function(directory, port, callback ){
  
  server.connection({ port: port });

  server.register(Inert, (err) => {

    server.route({
        method: 'GET',
        path: '/static/{param*}',
        handler: {
            directory: {
                path: directory,
                listing: true,
                redirectToSlash: true,
                index: true,
                lookupCompressed: true
            }
        }
    });

  });

  server.start((err) => {
      if (err) {
          throw err;
      }

      console.log(`Server running at: ${server.info.uri}`);

      if( callback ){
        callback();
      }
  });
}