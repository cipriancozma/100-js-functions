function getMonthsNeededToWait(index1, index2) {
  if (index2 > index1) {
    return index2 - index1;
  }

  return 12 - index1 + index2;
}

console.log(getMonthsNeededToWait(1, 3));
console.log(getMonthsNeededToWait(11, 0));
