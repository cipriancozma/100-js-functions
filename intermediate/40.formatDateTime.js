function formatDateTime(date, locale) {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date(date));
}

const date = "2024-01-04T12:37:00.000Z";
const locale = "de-DE";
console.log(formatDateTime(date, locale));
