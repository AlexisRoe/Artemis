const isUnixTime = (date) => Math.floor(date / 1000);

function createPeriodOfTime(timestamp) {
  const givenDate = new Date(timestamp * 1000);
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

exports.isUnixTime = isUnixTime;
exports.createPeriodOfTime = createPeriodOfTime;
