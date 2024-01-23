function getLongestString(arrayOfStrings) {
  let longestString = "";

  for (let string of arrayOfStrings) {
    if (string.length > longestString.length) {
      longestString = string;
    }
  }

  return longestString;
}

const stringArr = [
  "Montgomery",
  "Juneau",
  "Phonex",
  "Little Rock",
  "Sacramento",
  "Denver",
  "Washington, D.C.",
  "Hartford",
  "Dover",
  "Tallahassee",
];
console.log(getLongestString(stringArr));
