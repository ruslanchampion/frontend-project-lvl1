import { getRandomNumber } from '../../helpers/getRandomNumber.js';

const MAX_NUMBER = 100;

export function getQA() {
  const randomNumber = getRandomNumber(MAX_NUMBER);

  return {
    gameQuestion: randomNumber,
    gameAnswer: randomNumber % 2 === 0 ? 'yes' : 'no',
  };
}
