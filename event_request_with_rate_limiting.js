const { App, Loggur }	= require( 'event_request' );
const app				= App();

const rule				= {
	maxAmount: 500,
	refillTime: 1,
	refillAmount: 500,
	policy: 'strict',
	ipLimit: false
};

Loggur.disableDefault();

app	.get( '/', app.er_rate_limits.rateLimit( rule ), event =>{ event.send( '' ); } )
	.listen( 80, ()=>{ console.log( 'Event Request with rate Limiting Started' ); } );
