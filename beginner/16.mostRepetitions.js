function mostRepetitions(string1, string2, letter) {
  let repetitions_string1 = string1
    .split("")
    .filter((x) => x === letter).length;
  let repetitions_string2 = string2
    .split("")
    .filter((x) => x === letter).length;
  if (repetitions_string1 >= repetitions_string2) {
    return string1;
  } else {
    return string2;
  }
}

console.log(mostRepetitions("Los Angeles", "Texas", "s"));
