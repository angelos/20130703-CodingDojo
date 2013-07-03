var triviaAnswers = {
	"who played James Bond in the film Dr No": "Sean Connery",
	"which city is the Eiffel tower in": "Paris",
	"what colour is a banana": "yellow"
}

function trivia(question) {
	for (q in triviaAnswers) {
		if (question.indexOf(q) != -1) {
			return triviaAnswers[q];
		}
	}
}

exports.answer = trivia;