const { createTime } = require("./convertTimestamp");
const { sortEventsByTime } = require("./sortEventsByTime");

const DELAY = 21600;

const createContentNextUp = (documents, timestamp) => {
  const content = documents.reduce((previous, document) => {
    const eventsInPeriodOfTime = [...document.rooms, ...document.event].filter(
      (event) => event.start < timestamp || event.start > timestamp + DELAY
    );

    const events = eventsInPeriodOfTime.map((event) => {
      return {
        id: document._id,
        time: createTime(event),
        title: event.title,
        room: event.location,
        description: document.title,
      };
    });

    return [...previous, ...events];
  }, []);

  return sortEventsByTime(content);
};

const createContentEventsToday = (documents) => {
  const content = documents.reduce((previous, document) => {
    const defaultRoom = document.rooms.find((room) => room.default);
    const info = {
      id: document._id,
      time: createTime(document),
      title: document.title,
      room: defaultRoom.location,
      setup: defaultRoom.setup,
      pax: defaultRoom.pax,
      pinboard: defaultRoom.equipment.pinnboard,
      flipchart: defaultRoom.equipment.flipchart,
    };

    return [...previous, info];
  }, []);

  content.sort((firstElement, secondElement) => {
    if (firstElement.time > secondElement.time) {
      return 1;
    }
    if (firstElement.time < secondElement.time) {
      return -1;
    }

    return 0;
  });

  return sortEventsByTime(content);
};

const buildDailyOverview = (documents, timestamp) => {
  const nextUp = {
    title: "Next Up",
    list: true,
    content: createContentNextUp(documents, timestamp),
  };

  const eventsToday = {
    title: "Events today",
    list: false,
    content: createContentEventsToday(documents),
  };

  return [nextUp, eventsToday];
};

exports.buildDailyOverview = buildDailyOverview;
