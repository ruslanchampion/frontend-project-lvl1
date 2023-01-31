import getRandomNumber from '../../helpers/getRandomNumber.js';
import getGCD from './getGCD.js';

const MAX_NUMBER = 101;

export default function getQA() {
  const firstNumber = getRandomNumber(MAX_NUMBER);
  const secondNumber = getRandomNumber(MAX_NUMBER);

  return {
    gameQuestion: `${firstNumber} ${secondNumber}`,
    gameAnswer: getGCD(firstNumber, secondNumber),
  };
}
