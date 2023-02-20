import brainGame from '../index.js';
import getRandomNumber from '../helpers/getRandomNumber.js';

const SYMBOL = '..';

const MAX_PATTERN = 50;
const ARR_SIZE = 10;

function getRandomArray(start, step, length) {
  const baseArray = [];
  for (let i = 0; i <= length; i += 1) {
    baseArray.push(step * i + start);
  }
  return baseArray;
}

function getQuestionAndAnswer() {
  const randomLengthArray = getRandomNumber(ARR_SIZE) + ARR_SIZE;
  const randomNumberOfArray = getRandomNumber(randomLengthArray);
  const start = getRandomNumber(MAX_PATTERN);
  const pattern = getRandomNumber(MAX_PATTERN) + 1;
  const baseArray = getRandomArray(start, pattern, randomLengthArray);
  const answer = String(baseArray[randomNumberOfArray]);
  baseArray[randomNumberOfArray] = SYMBOL;

  return {
    gameQuestion: baseArray.join(' '),
    gameAnswer: answer,
  };
}

export default function runBrainProgression() {
  const rule = 'What number is missing in the progression?';
  brainGame(rule, getQuestionAndAnswer);
}
