const http	= require( 'http' );

const server	= http.createServer(( request, response )=>{
	response.end( '' );
});

server.listen( 80, ()=>{
	console.log( 'Http server started' );
});