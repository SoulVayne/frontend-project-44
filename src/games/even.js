import { game, getRandomNumber } from '../index.js';

function randomQuestionParity() {
  const question = getRandomNumber(100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
}

const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';

game(rulesGame, randomQuestionParity);

export default randomQuestionParity;
