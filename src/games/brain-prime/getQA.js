import { getRandomNumber } from "../../helpers/getRandomNumber.js"
import { isPrime } from "./isPrime.js"

const MAX_NUMBER = 1000

export function getQA() {
  const randomNumber = getRandomNumber(MAX_NUMBER)

  return {
    gameQuestion: randomNumber,
    gameAnswer: isPrime(randomNumber) ? "yes" : "no",
  }
}
