import readlineSync from 'readline-sync'

  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);

const randomQuestion = (defGame) => {
  const [question, correctAnswer] = defGame();
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
  return [userAnswer, correctAnswer, correctAnswer === userAnswer];
};
const getRandomNumber = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);

const game = (rules, defGame) => {
  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const [userAnswer, correctAnswer, answer] = randomQuestion(defGame);
    if (answer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n
        Let's try again, ${name}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export { game, getRandomNumber };