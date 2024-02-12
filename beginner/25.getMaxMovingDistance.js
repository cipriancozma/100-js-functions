function getMaxMovingDistance(budget, weight, cost) {
  let costToMoveEverything1km = (weight / 1000) * cost;
  return budget / costToMoveEverything1km;
}

console.log(getMaxMovingDistance(700, 440, 50));
