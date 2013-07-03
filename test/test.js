var assert = require("assert");
var oracle = require("../lib/answers");

describe('oracle', function(){
	it('should answer what is the 6nd number in the Fibonacci sequence', function(){
		assert.equal(8, oracle.answer("what is the 6nd number in the Fibonacci sequence"));
	})

	it('should answer which of the following numbers is both a square and a cube: 4096, 4095', function(){
		assert.equal(4096, oracle.answer("which of the following numbers is both a square and a cube: 4096, 4095"));
	})

	it('should answer who played James Bond in the film Dr No', function(){
		assert.equal("Sean Connery", oracle.answer("who played James Bond in the film Dr No"));
	})

	it('should answer which city is the Eiffel tower in', function(){
		assert.equal("Paris", oracle.answer("which city is the Eiffel tower in"));
	})

	it('should answer what colour is a banana', function(){
		assert.equal("yellow", oracle.answer("what colour is a banana"));
	})
})
