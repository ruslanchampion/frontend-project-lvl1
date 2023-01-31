import readlineSync from 'readline-sync';
import { sayHello } from './cli.js';

const STEPS = {
  count: 0,
  max: 3,
};

export function brainGame(rules, question) {
  const name = sayHello();
  console.log(rules);

  while (STEPS.count < STEPS.max) {
    const { gameQuestion, gameAnswer } = question();

    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isCorrect = userAnswer == gameAnswer;

    if (isCorrect) {
      console.log('Correct!');
      STEPS.count += 1;
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${gameAnswer}. \n Let's try again, ${name}!`,
      );
      return;
    }
  }

  STEPS.count === 3 && console.log(`Congratulations, ${name}!`);
}
