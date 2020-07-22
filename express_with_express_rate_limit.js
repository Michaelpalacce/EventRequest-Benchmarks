const app		= require( 'express' )();
const rateLimit	= require( 'express-rate-limit' );

const limiter = rateLimit({
	windowMs: 1000,
	max: 500,

});

app.use( limiter );

app	.get( '/', ( request, response ) =>{ response.send( '' ); } )
	.listen( 80, ()=>{ console.log( 'Express with express-rate-limit Started' ); } );
