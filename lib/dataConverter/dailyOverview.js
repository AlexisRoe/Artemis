const {
  createTimefromUnixTimestamp,
} = require("../timeHandler/timestampConverter");

const buildDailyOverview = (documents, { now }) => {
  // delay enabled to filter events up to 1 hour
  const delay = 3600;

  const dailyOverview = [
    { title: "Next Up", list: true, content: [] },
    { title: "Events today", list: false, content: [] },
  ];

  documents.forEach((document) => {
    const titleEvent = document.title;
    const id = document._id;

    const createInfo = (event) => {
      if (event.start >= now && event.start <= now + delay) {
        const info = {};
        info.time = createTimefromUnixTimestamp(event.start);
        info.title = event.title;
        info.description = titleEvent;
        info.room = event.location;
        info.eventID = id;
        dailyOverview[0].content.push(info);
      }
    };

    document.rooms.forEach(createInfo);
    document.event.forEach(createInfo);
  });

  documents.forEach((document) => {
    const info = {};
    info.time = createTimefromUnixTimestamp(document.start);
    info.title = document.title;
    info.eventID = document._id;
    document.rooms.forEach((room) => {
      if (room.default) {
        info.room = room.location;
        info.setup = room.setup;
        info.pax = room.pax;
        info.pinboard = room.equipment.pinnboard;
        info.flipchart = room.equipment.flipchart;
        dailyOverview[1].content.push(info);
      }
    });
  });

  return dailyOverview;
};

exports.buildDailyOverview = buildDailyOverview;
