const app	= require( 'express' )();

app.get( '/', ( req, res )=>{
	res.send( 'ok' );
});

app.listen( 80, ()=>{
	console.log( 'Express Started' );
} );