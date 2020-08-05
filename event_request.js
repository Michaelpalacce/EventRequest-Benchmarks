const app	= require( 'event_request' )();

app	.get( '/', event =>{ event.response.end( '' ); } )
	.listen( 80, ()=>{ console.log( 'Event Request Started' ); } );
