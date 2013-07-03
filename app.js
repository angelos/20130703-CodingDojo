var http = require('http');

var addingPattern = /what is (\d+) plus (\d+)/
var largestPattern = /which of the following numbers is the largest: (\d+), (\d+)/
var squareAndCubePattern = /which of the following numbers is both a square and a cube: (\d+), (\d+)/

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

function answerSquareAndCube(question) {
    var match = squareAndCubePattern.exec(question);
    var left = parseInt(match[1]);
    var right = parseInt(match[2]);

    function isCube(n) {
    	return Math.pow(Math.ceil(Math.pow(n, 1/3)), 3) == n
    }

    function isSquare(n) {
    	return Math.pow(Math.ceil(Math.pow(n, 1/2)), 2) == n
    }

    var result = [];

    if (isCube(left) && isSquare(left)) {
    	result.push(left);
    }
    if (isCube(right) && isSquare(right)) {
    	result.push(right);
    }

    return result;
}

function handleQuestion(question) {
	if (addingPattern.test(question)) {
		return answerAdding(question);
	}
	if (largestPattern.test(question)) {
		return answerLargest(question);
	}
	if (squareAndCubePattern.test(question)) {
		return answerSquareAndCube(question);
	}
}

var server = http.createServer(function(request, response) {
	var question = unescape(request.url);
	console.log("incoming question: " + question);

	var result = handleQuestion(question);
	response.end("" + result);
});

server.listen(3000);