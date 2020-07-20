const app	= require( 'event_request' )();

app	.get( '/', event =>{ event.send( '' ); } )
	.listen( 80, ()=>{ console.log( 'Event Request Started' ); } );
