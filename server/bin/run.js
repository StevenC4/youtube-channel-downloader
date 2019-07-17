const http = require('http');
const config = require('../config');
// const log = require('../lib/log');
const app = require('../app');
const port = config.get('port');

/**
 * Create HTTP server
 */
// log.info(`Starting ${config.get('appName')} on port ${port}`);

const server = http.createServer(app);

const gracefulShutdown = async () => {
	// log.info('Commencing Shutdown, Closing Server to new requests');
	await new Promise(resolve => server.close(resolve));
	// log.info('All requests completed, Closing DB Connections');
	try {
		// await db.destroy();
		// log.info('Database pool destroyed');
	} catch (err) {
		// log.error({err},'Problem Handling Shutdown of Database pool');
	}
};

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
process.on('SIGTERM', () => {
	// config.set('maintenance', true);
	// log.info('SIGTERM Recieved, Healthcheck disabled');
	setTimeout(gracefulShutdown, 18000, 'shutdownTimer');
});

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
	if (error.syscall !== 'listen') {
		throw error;
	}

	const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

	// Handle specific listen errors with friendly messages
	switch (error.code) {
		case 'EACCES': {
			// log.error(bind + ' requires elevated privileges');
			process.exit(1);
			break;
		} case 'EADDRINUSE': {
			// log.error(bind + ' is already in use');
			process.exit(1);
			break;
		} default: {
			throw error;
		}
	}
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
	const addr = server.address();
	const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
	// log.info('Listening on ' + bind);
}
