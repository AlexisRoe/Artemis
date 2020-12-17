const toUnixTime = (date) => Math.floor(date / 1000);

function createPeriodOfTime(timestamp) {
  const givenDate = new Date(timestamp * 1000);
  const start = toUnixTime(
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
  const end = toUnixTime(
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
  return { startPeriod: start, endPeriod: end, timeNow: timestamp };
}

exports.createPeriodOfTime = createPeriodOfTime;
