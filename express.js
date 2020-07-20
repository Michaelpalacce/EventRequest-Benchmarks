const app	= require( 'express' )();


app	.get( '/', ( request, response ) =>{ response.send( '' ); } )
	.listen( 80, ()=>{ console.log( 'Express Started' ); } );
