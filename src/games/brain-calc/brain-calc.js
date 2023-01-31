import brainGame from '../../index.js';
import getQA from './getQA.js';

export default function brainCalc() {
  const gameRule = 'What is the result of the expression?';

  brainGame(gameRule, getQA);
}
