function halfAndHalf(text) {
  const firstHalf = text.slice(0, text.length / 2).toLowerCase();
  const secondHalf = text.slice(text.length / 2).toUpperCase();
  return firstHalf + secondHalf;
}

console.log(halfAndHalf("Hello World"));
