export function getNumbers(min, max, step) {
  const numbers = [];
  for (let number = min; number <= max; number += step) {
    numbers.push(number);
  }
  return numbers;
}
