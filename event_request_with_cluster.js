const cluster			= require( 'cluster' );
const { App, Loggur }	= require( 'event_request' );
const app				= App();

if (cluster.isMaster) {
	for (let i = 0; i < 8; i++) {
		cluster.fork();
	}
} else {
	app	.get( '/', event =>{ event.send( '' ); } )
	.listen( 80, ()=>{ Loggur.log( 'Event Request Started' ); } );
}
