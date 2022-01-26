import * as questionsModule from './questions.js';
import * as quizModule from './quiz.js';

const c = quizModule.c;

questionsModule.checkIfPlayerExist();
quizModule.shuffleQuestions(questionsModule.questions);
quizModule.showQuestionAndAnswers();

document.updateQuestion = (btn) => {
	quizModule.sumPlayerAttributes(btn);
	quizModule.questionNumber();
	quizModule.applyQuestion();
}
document.updateStrangeQuestion = () => {
	quizModule.moveToRandomPosition();

	if(quizModule.checkTouching(c(".point"), c(".content")) == true) {
		moveToRandomPosition();
	}

	quizModule.playerAttributes["parasitum"] += 1;
	quizModule.questionNumber();
	quizModule.applyQuestion();
	console.log(quizModule.playerAttributes);
}
