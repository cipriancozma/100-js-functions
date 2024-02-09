function getMillisecondsBetween(date1, date2) {
  const milliseconds_date_1 = date1.getTime();
  const milliseconds_date_2 = date2.getTime();

  return Math.abs(milliseconds_date_1 - milliseconds_date_2);
}

let date1 = new Date("2021-05-07T12:41:00.000Z");
let date2 = new Date("2021-05-17T12:41:00.000Z");
console.log(getMillisecondsBetween(date1, date2)); // 864000000
