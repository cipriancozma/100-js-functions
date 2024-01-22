function max5(nr1, nr2, nr3, nr4, nr5) {
  const maximum = [nr1, nr2, nr3, nr4, nr5];
  return Math.max(...maximum);
}

console.log(max5(19, 12, 2, -31, 19.5));
