function areValuesUnique(numbers) {
  //   const uniqueArr = [...new Set(numbers)];
  //   if (numbers.length === uniqueArr.length) return true;
  //   return false;
  const uniqueArr = new Map();

  for (let number of numbers) {
    if (uniqueArr.has(number)) {
      return false;
    }
    uniqueArr.set(number, true);
  }
  console.log(uniqueArr);
  return true;
}

console.log(areValuesUnique([4, 6, -8, 14]));
console.log(areValuesUnique([0, 1, 2, 3, 4, 3]));
