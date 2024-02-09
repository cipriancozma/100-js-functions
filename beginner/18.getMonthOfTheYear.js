function getMonthOfTheYear(date) {
  // const month = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];
  // const monthIdx = date.getMonth();
  // return month[monthIdx];

  return new Intl.DateTimeFormat("es-ES", {
    month: "long",
  }).format(date);
}

const month = new Date("2024-12-25T16:15:00.000Z");
console.log(getMonthOfTheYear(month));
