function createTime(document) {
  return `${convertTime(document.start)} - ${convertTime(document.end)}`;
}

function convertTime(unixTimestamp) {
  const date = new Date((unixTimestamp - 7200) * 1000);
  return new Intl.DateTimeFormat("de-DE", {
    hour12: false,
    timeStyle: "short",
  }).format(date);
}

function convertDate(unixTimestamp) {
  const date = new Date((unixTimestamp - 7200) * 1000);
  const dateString = new Intl.DateTimeFormat("de-DE", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(date);
  return dateString.replace(/\D/g, ".");
}

exports.createTime = createTime;
exports.convertDate = convertDate;
