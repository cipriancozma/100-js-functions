function lastNRevert(text, n) {
  const strToArr = text.split("");
  return strToArr.reverse().join("").slice(0, n);
}

console.log(lastNRevert("T-shirts", 4));
