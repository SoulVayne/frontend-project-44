import {game, getRandomNumber } from "../index.js";

const randomQuestionPrime = () => {
    const number = getRandomNumber(200);
    let correctAnswer = 'yes';
    for (let i = 2; i < number / 2; i += 1) {
        if (number % i === 0) { correctAnswer = 'no'; }
    }
    const question = number;
    return [question, correctAnswer];
};

export default randomQuestionPrime;

const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

game(rulesGame, randomQuestionPrime);