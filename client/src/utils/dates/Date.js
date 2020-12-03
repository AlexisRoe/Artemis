// date-format: DD.MM.YYYY
export const isDate = (today = Date.now()) =>
  `${today.getDate().slice(-2)}.${(today.getMonth() + 1).slice(
    -2
  )}.${today.getFullYear()}`;

// time-format: MM:HH
export const isTime = (time = Date.now()) =>
  `${time.getMinutes().slice(-2)}.${time.getHours().slice(-2)}`;

// Unix Timestamps
export const isUnixTime = () => Math.floor(Date.now() / 1000);

export const convertDatefromUnixTime = (unixTimestamp) =>
  isDate(new Date(unixTimestamp * 1000));

export const convertTimefromUnixTime = (unixTimestamp) =>
  isTime(new Date(unixTimestamp * 1000));
