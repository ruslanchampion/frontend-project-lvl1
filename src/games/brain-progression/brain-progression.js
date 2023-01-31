import { brainGame } from "../../index.js"
import { getQA } from "./getQA.js"

export function brainProgression() {
  const rule = "What number is missing in the progression?"
  brainGame(rule, getQA)
}