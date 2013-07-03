var http = require('http');

var server = http.createServer(function(request, response) {
	console.log("incoming request: " + request.url);
    
    response.end('Luminis Arnhem');
});

server.listen(3000);