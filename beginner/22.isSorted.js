function isSorted(numbers) {
  const sort_asceding = numbers.toSorted((a, b) => a - b);
  const sort_descending = numbers.toSorted((a, b) => b - a);

  const isEqual = (arr1, arr2) => {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  };

  if (isEqual(numbers, sort_asceding) || isEqual(numbers, sort_descending)) {
    return true;
  }
  return false;
}

const numbers = [19, 10, 23];
const numbers_two = [91, 31, -5];
console.log(isSorted(numbers));
console.log(isSorted(numbers_two));
