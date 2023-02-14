import brainGame from '../../index.js';
import getRandomNumber from '../../helpers/getRandomNumber.js';

const MAX_NUMBER = 10;
const OPERATIONS = ['+', '-', '*'];

export default function runBrainCalc() {
  const gameRule = 'What is the result of the expression?';

  brainGame(gameRule, getQuestionAndAnswer);
}

function getQuestionAndAnswer() {
  const firstNumber = getRandomNumber(MAX_NUMBER);
  const secondNumber = getRandomNumber(MAX_NUMBER);
  const operation = OPERATIONS[getRandomNumber(OPERATIONS.length)];

  return {
    gameQuestion: `${firstNumber} ${operation} ${secondNumber}`,
    gameAnswer: String(getAnswer(operation, firstNumber, secondNumber)),
  };
}

function getAnswer(operation, firstNumber, secondNumber) {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
  }
}
