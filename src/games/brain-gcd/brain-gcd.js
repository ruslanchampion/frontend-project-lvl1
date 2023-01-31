import { brainGame } from '../../index.js';
import { getQA } from './getQA.js';

export function brainGCD() {
  const gameRule = 'Find the greatest common divisor of given numbers.';
  brainGame(gameRule, getQA);
}
