var http = require('http');

var addingPattern = /what is (\d+) plus (\d+)/
var largestPattern = /which of the following numbers is the largest: (\d+), (\d+)/

function answerAdding(question) {
    var match = addingPattern.exec(question);
    var left = parseInt(match[1]);
    var right = parseInt(match[2]);
    return left + right;
}

function answerLargest(question) {
    var match = largestPattern.exec(question);
    var left = parseInt(match[1]);
    var right = parseInt(match[2]);
    return Math.max(left, right);
}

var server = http.createServer(function(request, response) {
	var question = unescape(request.url);
	console.log("incoming question: " + question);

	if (addingPattern.test(question)) {
		var result = answerAdding(question);
		response.end("" + result);
	}
	if (largestPattern.test(question)) {
		var result = answerLargest(question);
		response.end("" + result);
	}

});

server.listen(3000);