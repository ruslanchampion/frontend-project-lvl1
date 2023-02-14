import brainGame from '../../index.js';
import getRandomNumber from '../../helpers/getRandomNumber.js';

const MAX_NUMBER = 100;

export default function runBrainEven() {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

  brainGame(gameRules, getQuestionAndAnswer);
}

function getQuestionAndAnswer() {
  const randomNumber = getRandomNumber(MAX_NUMBER);

  return {
    gameQuestion: randomNumber,
    gameAnswer: isEven(randomNumber) ? 'yes' : 'no',
  };
}

function isEven(num){
  return num % 2 === 0
}