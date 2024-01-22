function getGasolineAmount(distance, consumptionPer100Km) {
  const ENTIRE_ROUND_TRIP = 2;
  return (distance * ENTIRE_ROUND_TRIP * consumptionPer100Km) / 100;
}

console.log(getGasolineAmount(128, 6.4));
