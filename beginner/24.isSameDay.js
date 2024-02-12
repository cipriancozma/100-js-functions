function isSameDay(date1, date2) {
  const first_date = new Date(date1);
  const second_date = new Date(date2);

  return (
    first_date.getFullYear() === second_date.getFullYear() &&
    first_date.getMonth() === second_date.getMonth() &&
    first_date.getDay() === second_date.getDay()
  );
}

const date1 = "2017-06-19T10:00:00.000Z";
const date2 = "2017-06-19T11:00:00.000Z";

console.log(isSameDay(date1, date2));
