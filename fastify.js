// Require the framework and instantiate it
const fastify = require('fastify')();

// Declare a route
fastify.get('/', (request, reply) => {
	reply.send('')
})

// Run the server!
fastify.listen(80, () => {
	console.log( 'Fastify started' );
});