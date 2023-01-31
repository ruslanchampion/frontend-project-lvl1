export function getGCD(x, y) {
  return !y ? x : getGCD(y, x % y);
}
