function getMonthOfTheYear(date) {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthIdx = date.getMonth();
  return month[monthIdx];
}

const month = new Date("2024-12-25T16:15:00.000Z");
console.log(getMonthOfTheYear(month));
