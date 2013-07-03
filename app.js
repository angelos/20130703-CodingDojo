var http = require('http');

var addingPattern = /what is (\d+) plus (\d+)/
var minusPattern = /what is (\d+) minus (\d+)/
var multipliedPattern = /what is (\d+) multiplied by (\d+)/
var fibonacciPattern = /what is the (\d+).. number in the Fibonacci sequence/
var largestPattern = /which of the following numbers is the largest: (\d+), (\d+)/
var squareAndCubePattern = /which of the following numbers is both a square and a cube: (\d+), (\d+)/

function answerAdding(question) {
    var match = addingPattern.exec(question);
    var left = parseInt(match[1]);
    var right = parseInt(match[2]);
    return left + right;
}

function answerMinus(question) {
    var match = minusPattern.exec(question);
    var left = parseInt(match[1]);
    var right = parseInt(match[2]);
    return left - right;
}

function answerMultiplied(question) {
    var match = multipliedPattern.exec(question);
    var left = parseInt(match[1]);
    var right = parseInt(match[2]);
    return left * right;
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

    function isAPower(n, base) {
    	return Math.pow(Math.ceil(Math.pow(n, 1/base)), base) == n
    }

    function isCube(n) {
    	return isAPower(n, 3);
    }

    function isSquare(n) {
    	return isAPower(n, 2);
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

function answerFibonacci(question) {
    var match = fibonacciPattern.exec(question);
    var n = match[1];

    var phi = (1 + Math.sqrt(5))/2;
    var psi = (1 - Math.sqrt(5))/2;
    function fib(n) { return (Math.pow(phi, n) - Math.pow(psi, n)) / (phi - psi) }
    return fib(n);
}

function handleQuestion(question) {
	if (addingPattern.test(question)) {
		return answerAdding(question);
	}
    if (minusPattern.test(question)) {
        return answerMinus(question);
    }
	if (multipliedPattern.test(question)) {
		return answerMultiplied(question);
	}
	if (largestPattern.test(question)) {
		return answerLargest(question);
	}
	if (squareAndCubePattern.test(question)) {
		return answerSquareAndCube(question);
	}
    if (fibonacciPattern.test(question)) {
        return answerFibonacci(question);
    }
    return "I know nothin', I'm from Barcelona";
}

var server = http.createServer(function(request, response) {
	var question = unescape(request.url);
	console.log("incoming question: " + question);

	var result = handleQuestion(question);
	response.end("" + result);
});

server.listen(3000);