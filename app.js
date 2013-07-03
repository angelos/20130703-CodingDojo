var http = require('http');
var oracle = require("./lib/answers");

var server = http.createServer(function(request, response) {
	var question = unescape(request.url);
	console.log("incoming question: " + question);

	var result = oracle.answer(question);
	response.end("" + result);
});

server.listen(3000);