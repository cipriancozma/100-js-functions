function getBiggestNumberInArrays(numbers1, numbers2) {
  return Math.max(...numbers1, ...numbers2);
}

const numbers1 = [7, 2, 9];
const numbers2 = [15, 28, 42];
console.log(getBiggestNumberInArrays(numbers1, numbers2));
