import { getRandomNumber } from '../../helpers/getRandomNumber.js';

const SYMBOL = '..';

const KEY_SCOPE = {
  from: 5,
  to: 3,
  minimum: 1,
};

export function getQA() {
  const key = getRandomNumber(KEY_SCOPE.from) + getRandomNumber(KEY_SCOPE.to) + KEY_SCOPE.minimum;

  const baseArray = new Array(10).fill(0).map((item, index) => item + (index + 1) * key);

  const randomNumberOfArray = getRandomNumber(baseArray.length);
  const gameQuestion = baseArray
    .map((item, ind) => (ind === randomNumberOfArray ? SYMBOL : item))
    .join(' ');

  return {
    gameQuestion,
    gameAnswer: baseArray[randomNumberOfArray],
  };
}
