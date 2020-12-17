export const mockTimestamp = () => {
  const today = new Date();
  const mockedDate = new Date(
    2020,
    9,
    today.getDay() + 1,
    today.getHours(),
    today.getMinutes(),
    0,
    0
  );
  return toUnixTime(mockedDate);
};

export const toDataStringFromUnix = (unixTimestamp) =>
  toTimeFormat(new Date(unixTimestamp * 1000));

const toUnixTime = (date = Date.now()) => Math.floor(date / 1000);

const toTimeFormat = (time = new Date()) =>
  `${("0" + time.getHours()).slice(-2)}.${("0" + time.getMinutes()).slice(-2)}`;

export const toDateFormat = (today = new Date()) =>
  new Intl.DateTimeFormat("de-DE", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(today);
