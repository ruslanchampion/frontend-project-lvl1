import readlineSync from 'readline-sync';

const MAX_ROUNDS = 3;

export default function brainGame(rule, getQuestionAndAnswer) {
  let roundsCount = 0;

  console.log('Welcome to the Brain Games!');

  console.log('May I have your name?');

  const name = readlineSync.question('Your answer: ');

  console.log(`Hello, ${name}!`);

  console.log(rule);

  while (roundsCount < MAX_ROUNDS) {
    const { gameQuestion, gameAnswer } = getQuestionAndAnswer();

    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isCorrect = userAnswer === String(gameAnswer);

    if (isCorrect) {
      console.log('Correct!');
      roundsCount += 1;
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${gameAnswer}. \n Let's try again, ${name}!`,
      );
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}
