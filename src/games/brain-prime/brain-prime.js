import { brainGame } from "../../index.js"
import { getQA } from "./getQA.js"

export function brainPrime() {
  const gameRule = "Answer 'yes' if given number is prime. Otherwise answer 'no'."
  brainGame(gameRule, getQA)
}
