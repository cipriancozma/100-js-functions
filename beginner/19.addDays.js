function addDays(initialDate, daysCount) {
  let new_date = new Date(initialDate);
  new_date.setDate(new_date.getDate() + daysCount);
  return new_date;
}

const initialDate = new Date("1994-10-04T16:23:00.000Z");
const days = 9;
console.log(addDays(initialDate, days));
