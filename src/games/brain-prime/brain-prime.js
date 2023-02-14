import brainGame from '../../index.js';
import getRandomNumber from '../../helpers/getRandomNumber.js';
import isPrime from './isPrime.js';

const MAX_NUMBER = 1000;

function getQuestionAndAnswer() {
  const randomNumber = getRandomNumber(MAX_NUMBER);

  return {
    gameQuestion: randomNumber,
    gameAnswer: isPrime(randomNumber) ? 'yes' : 'no',
  };
}

export default function runBrainPrime() {
  const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  brainGame(gameRule, getQuestionAndAnswer);
}
