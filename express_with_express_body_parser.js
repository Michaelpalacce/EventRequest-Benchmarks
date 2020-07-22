const app		= require( 'express' )();
var formidable	= require('formidable');

app	.get( '/', ( req, res ) =>{
	var form = new formidable.IncomingForm();

	form.parse(req, function(err, fields, files) {
		res.end( '' );
	});
}).listen( 80, ()=>{ console.log( 'Express with formidable Started' ); } );
