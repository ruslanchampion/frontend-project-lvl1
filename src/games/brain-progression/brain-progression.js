import brainGame from '../../index.js';
import getRandomNumber from '../../helpers/getRandomNumber.js';

const SYMBOL = '..';

const KEY_FROM = 5;
const KEY_TO = 3;
const KEY_MIN = 1;
const ARR_SIZE = 10;

export default function runBrainProgression() {
  const rule = 'What number is missing in the progression?';
  brainGame(rule, getQuestionAndAnswer);
}

function getQuestionAndAnswer() {
  const randomNumberOfArray = getRandomNumber(ARR_SIZE);
  const baseArray = [];
  const pattern = getRandomNumber(KEY_FROM) + getRandomNumber(KEY_TO) + KEY_MIN;
  let answer = 0;

  for (let i = 0; i <= ARR_SIZE; i++) {
    if (randomNumberOfArray === i) {
      answer = pattern * (i + 1);
      baseArray.push(SYMBOL);
      continue;
    }
    baseArray.push(pattern * (i + 1));
  }

  return {
    gameQuestion: baseArray.join(" "),
    gameAnswer: String(answer),
  };
}
