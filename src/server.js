'use strict'

const net = require('net');
const path = require('path');
const fastify = require('fastify')();

/**
 * Register the static file plugin in order to serve our index.html test file.
 */
fastify.register(require('fastify-static'), {

  root: path.join(__dirname),

});

/**
 * Serve the index.html file that contains all of the necessary test scripts.
 */
fastify.get('/', async (req, reply) => {

  reply.sendFile('index.html');

});

/**
 * Checks to see if a port is available or not.
 * 
 * @param {number} port The number of the port to check if available.
 * 
 * @returns {Promise<boolean>}
 */
function isPortAvailable(port) {

  return new Promise((resolve, reject) => {

    const server = net.createServer();

    server.once('error', (err) => {

      if (err.code === 'EADDRINUSE') resolve(false);

      reject(err);

    });

    server.once('listening', () => {

      server.close();

      resolve(true);

    });

    server.listen(port);

  });

}

/**
 * Export the func tion that will start a server on first available port.
 * 
 * @async
 */
module.exports = async function main() {

  let port = 3000;

  let portAvailable = false;

  while (!portAvailable) {

    portAvailable = await isPortAvailable(port);

    port++;

  }

  fastify.listen(port).catch(err => console.log(err));

  console.info(`Server running on http://localhost:${port}`);

}