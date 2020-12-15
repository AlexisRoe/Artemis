export const mockTimestamp = () => {
  const mockupDate = new Date(2020, 9, 2, 8, 0, 0, 0);
  return toUnixTime(mockupDate);
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

// ******************************************
// TODO: DELETE AND REFACTORE OTHER FUNCTIONS

// Unix Timestamps
export const isUnixTime = (date = Date.now()) => Math.floor(date / 1000);

// date-format: DD.MM.YYYY
export const isDate = (today = new Date()) =>
  `${("0" + today.getDate()).slice(-2)}.${("0" + (today.getMonth() + 1)).slice(
    -2
  )}.${today.getFullYear()}`;

// time-format: HH:MM
export const isTime = (time = new Date()) =>
  `${("0" + time.getHours()).slice(-2)}.${("0" + time.getMinutes()).slice(-2)}`;

// Unix Converter
export const convertDatefromUnixTime = (unixTimestamp) =>
  isDate(new Date(unixTimestamp * 1000));

export const convertTimefromUnixTime = (unixTimestamp) =>
  isTime(new Date(unixTimestamp * 1000));
