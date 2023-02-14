import brainGame from '../../index.js';
import getRandomNumber from '../../helpers/getRandomNumber.js';

const MAX_NUMBER = 101;

function getGCD(x, y) {
  return !y ? x : getGCD(y, x % y);
}

function getQuestionAndAnswer() {
  const firstNumber = getRandomNumber(MAX_NUMBER);
  const secondNumber = getRandomNumber(MAX_NUMBER);

  return {
    gameQuestion: `${firstNumber} ${secondNumber}`,
    gameAnswer: String(getGCD(firstNumber, secondNumber)),
  };
}

export default function runBrainGCD() {
  const gameRule = 'Find the greatest common divisor of given numbers.';
  brainGame(gameRule, getQuestionAndAnswer);
}
