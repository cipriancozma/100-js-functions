function extractElementsBetweenPositions(numbers, n, m) {
  const extractedElements =
    n < m ? numbers.slice(n, m + 1) : numbers.slice(m, n + 1);
  return extractedElements;
}

const numbers = [10, 24, 7, 42, 15, 8, 33, 19, 56, 91, 3, 28, 12, 50, 67];
console.log(extractElementsBetweenPositions(numbers, 4, 11));
