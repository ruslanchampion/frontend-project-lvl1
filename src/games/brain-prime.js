import brainGame from '../index.js';
import getRandomNumber from '../helpers/getRandomNumber.js';

const MAX_NUMBER = 1000;

function isPrime(num) {
  for (let i = 2, max = Math.sqrt(num); i <= max; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

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
