function arrayToObject(strings) {
  return strings.reduce((acc, value, idx) => {
    if (acc[value] === undefined) {
      acc[value] = idx;
    }
    return acc;
  }, {});
}

const arr = ["JavaScript", "is", "awesome"];
const arr2 = [
  "My",
  "name",
  "is",
  "Ciprian",
  ".",
  "What",
  "is",
  "your",
  "name",
  "?",
];

const arr3 = ["a", "a", "a", "a", "a"];
console.log(arrayToObject(arr));
console.log(arrayToObject(arr2));
console.log(arrayToObject(arr3));
