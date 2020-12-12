// Unix Timestamps
export const isUnixTime = () => Math.floor(Date.now() / 1000);

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

export const mockTimestamp = () => {
  const date = new Date();
  const mockupDate = new Date(
    2020,
    10,
    2,
    date.getHours(),
    date.getMinutes(),
    0,
    0
  );
  return isUnixTime(mockupDate);
};
