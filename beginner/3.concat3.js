function concat3(string1, string2, string3, separator) {
  const strings = `${string1} ${string2} ${string3}`;
  return strings.split(" ").join(separator);
}

console.log(concat3("HTML", "CSS", "JavaScript", ","));
