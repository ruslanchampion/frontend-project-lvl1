import { brainGame } from '../../index.js';
import { getQA } from './getQA.js';

export function brainCalc() {
  const gameRule = 'What is the result of the expression?';

  brainGame(gameRule, getQA);
}
