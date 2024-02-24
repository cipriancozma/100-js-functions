function mergeSortedArrays(numbers1, numbers2) {
  return [...numbers1, ...numbers2].sort((a, b) => a - b);
}

const numbers1 = [1, 2, 3, 4];
const numbers2 = [8, 7, 6, 5];

console.log(mergeSortedArrays(numbers1, numbers2));
