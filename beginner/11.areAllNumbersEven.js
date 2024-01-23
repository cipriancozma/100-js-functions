function areAllNumbersEven(numbers) {
  return numbers.every((number) => number % 2 === 0);
}

const arr1 = [4, 6, -8, 14];
const arr2 = [12, 22, 1, 40];

console.log(areAllNumbersEven(arr1));
console.log(areAllNumbersEven(arr2));
