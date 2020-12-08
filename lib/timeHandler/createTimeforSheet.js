function createTime(document) {
  return `${convertTime(document.start)} - ${convertTime(document.end)}`;
}

function convertTime(unixTimestamp) {
  const date = new Date((unixTimestamp - 7200) * 1000);
  return new Intl.DateTimeFormat("de-DE", { timeStyle: "short" }).format(date);
}

exports.createTime = createTime;
