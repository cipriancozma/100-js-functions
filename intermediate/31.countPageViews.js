function countPageViews(pageViews, country, interval) {
  const filteredCountry = pageViews.filter(
    (page) =>
      page.country === country &&
      page.date >= interval.startDate &&
      page.date <= interval.endDate
  );

  let count = filteredCountry.reduce((acc, item) => acc + item.count, 0);
  return count;
}

const pageViews = [
  { date: "2023-05-10T10:00:00.000Z", country: "RO", count: 104 },
  { date: "2023-05-05T10:00:00.000Z", country: "USA", count: 151 },
  { date: "2023-05-07T10:00:00.000Z", country: "RO", count: 67 },
  { date: "2023-05-10T10:00:00.000Z", country: "CA", count: 89 },
  { date: "2023-05-12T12:00:00.000Z", country: "RO", count: 500 },
];
const interval = {
  endDate: "2023-05-12T10:00:00.000Z",
  startDate: "2023-05-01T10:00:00.000Z",
};
console.log(countPageViews(pageViews, "RO", interval));
