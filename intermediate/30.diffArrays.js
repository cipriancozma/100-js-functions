function diffArrays(numbers1, numbers2) {
  let result = [];
  for (let i = 0; i < numbers1.length; i++) {
    if (!numbers2.includes(numbers1[i])) {
      result.push(numbers1[i]);
    }
  }

  for (let j = 0; j < numbers2.length; j++) {
    if (!numbers1.includes(numbers2[j])) {
      result.push(numbers2[j]);
    }
  }
  return result;
}

const numbers1 = [11, 96, 103, -5, 0, 12, 1];
const numbers2 = [0, 1, 2, 3, 4, 5];
console.log(diffArrays(numbers1, numbers2));
