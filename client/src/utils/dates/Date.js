export function isDate() {
  const today = new Date();
  const date = `${today.getDate()}.${
    today.getMonth() + 1
  }.${today.getFullYear()}`;

  return date;
}
