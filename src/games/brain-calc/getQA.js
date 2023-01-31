import { getRandomNumber } from "../../helpers/getRandomNumber.js"

const MAX_NUMBER = 10
const OPERATIONS = ["+", "-", "*"]

export function getQA() {
  const firstNumber = getRandomNumber(MAX_NUMBER)
  const secondNumber = getRandomNumber(MAX_NUMBER)
  const operation = OPERATIONS[getRandomNumber(OPERATIONS.length)]

  let gameAnswer = 0
  switch (operation) {
    case "+":
      gameAnswer = firstNumber + secondNumber
      break
    case "-":
      gameAnswer = firstNumber - secondNumber
      break
    case "*":
      gameAnswer = firstNumber * secondNumber
      break
  }

  return {
    gameQuestion: `${firstNumber} ${operation} ${secondNumber}`,
    gameAnswer,
  }
}
