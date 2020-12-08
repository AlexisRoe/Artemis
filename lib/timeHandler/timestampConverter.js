const isUnixTime = (date) => Math.floor(date / 1000);
const isDateObject = (unixTime) => new Date(unixTime * 1000);

function createTimeScale(timestamp) {
  const givenDate = isDateObject(timestamp);
  const start = isUnixTime(
    new Date(
      givenDate.getFullYear(),
      givenDate.getMonth(),
      givenDate.getDate(),
      0,
      0,
      0,
      1
    )
  );
  const end = isUnixTime(
    new Date(
      givenDate.getFullYear(),
      givenDate.getMonth(),
      givenDate.getDate(),
      23,
      59,
      59,
      999
    )
  );
  return { start, end, now: timestamp };
}

// function createTimeQueryFromGivenDate(date) {
//   // date format: YYYY-MM-DDTHH:MM:SS:MS
//   const splittedDate = date.split("T");
//   const dateValues = splittedDate[0].split("-");
//   const timeValues = splittedDate[1].split(":");
//   const start = isUnixTime(
//     new Date(dateValues[0], dateValues[1] - 1, dateValues[2], 0, 0, 0, 1)
//   );
//   const end = isUnixTime(
//     new Date(dateValues[0], dateValues[1] - 1, dateValues[2], 23, 59, 59, 999)
//   );
//   const time = isUnixTime(
//     dateValues[0],
//     dateValues[1] - 1,
//     dateValues[2],
//     timeValues[0],
//     timeValues[1],
//     timeValues[2],
//     0
//   );
//   return { start, end, time };
// }

function createTimeQueryForToday() {
  const date = new Date();
  const start = isUnixTime(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    0,
    0,
    0,
    1
  );
  const end = isUnixTime(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    23,
    59,
    59,
    59
  );
  return { start, end };
}

function createTimefromUnixTimestamp(unixTimestamp) {
  const date = new Date((unixTimestamp - 7200) * 1000);
  return new Intl.DateTimeFormat("de-DE", { timeStyle: "short" }).format(date);
}

exports.isUnixTime = isUnixTime;
exports.createTimeScale = createTimeScale;
// exports.createTimeQueryFromGivenDate = createTimeQueryFromGivenDate;
exports.createTimeQueryForToday = createTimeQueryForToday;
exports.createTimefromUnixTimestamp = createTimefromUnixTimestamp;
