'use strict';

const Hapi	= require('@hapi/hapi');

const init	= async () => {
	const server = Hapi.server({
		port: 80,
		host: 'localhost'
	});

	server.route({
		method: 'GET',
		path: '/',
		handler: (request, h) => {
			return '';
		}
	});

	await server.start();
	console.log('Hapi started');
};

init();