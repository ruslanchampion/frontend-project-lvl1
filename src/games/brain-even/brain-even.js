import { brainGame } from "../../index.js"
import { getQA } from "./getQA.js"

export function brainEven() {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".'

  brainGame(gameRules, getQA)
}
