const app	= require( 'event_request' )();

const path			= require( 'path' );
const PROJECT_ROOT	= path.parse( require.main.filename ).dir;

app.apply( app.er_body_parser_multipart, { tempDir: path.join( PROJECT_ROOT, '/Uploads' ) } );

app	.get( '/', event =>{
		event.send( '' );
	}
).listen( 80, ()=>{ console.log( 'Event Request with er_multipart_body_parser Started' ); } );
