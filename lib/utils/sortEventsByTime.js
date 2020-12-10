function sortEventsByTime(array) {
  array.sort((firstElement, secondElement) => {
    if (firstElement.time > secondElement.time) {
      return 1;
    }
    if (firstElement.time < secondElement.time) {
      return -1;
    }

    return 0;
  });
  return array;
}

exports.sortEventsByTime = sortEventsByTime;
