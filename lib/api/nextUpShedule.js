const { createTimefromUnixTimestamp } = require("./unixTimestampConverter");

function createNextUpShedule(documents, query) {
  const eventList = { title: "Next Up", list: true, content: [] };
  documents.forEach((document) => {
    const events = document.shedule;
    const filteredEvents = events.filter(
      (event) => event.start >= query.start && event.end <= query.end
    );
    filteredEvents.forEach((filteredEvent) => {
      const titleEvent = filteredEvent.title;
      const rooms = filteredEvent.rooms;
      rooms.forEach((room) => {
        if (room.start >= query.time) {
          const info = {};
          info.time = createTimefromUnixTimestamp(room.start);
          info.title = `Setup: ${room.role}`;
          info.description = titleEvent;
          info.room = room.location;
          eventList.content.push(info);
        }
      });
      const fabEvents = filteredEvent.fb;
      fabEvents.forEach((fabEvent) => {
        if (fabEvent.start >= query.time) {
          const info = {};
          info.time = createTimefromUnixTimestamp(fabEvent.start);
          info.title = fabEvent.title;
          info.description = titleEvent;
          info.room = fabEvent.location;
          eventList.content.push(info);
        }
      });
    });
  });
  return eventList;
}

// EXPECTED OUTPUT OF FUNCTION

//  {
//     title: "Next Up",
//     list: true,
//     content: [
//       {
//         time: "10:00",
//         title: "Kaffeepause",
//         description: "Telekom Team 1",
//         room: "Lounge",
//       },
//       {
//         time: "10:15",
//         title: "Snacks",
//         description: "Telekom Team 2",
//         room: "Raum 123",
//       },
//       {
//         time: "10:30",
//         title: "Kaffeepause",
//         description: "Telekom Team 3",
//         room: "Lounge",
//       },
//     ],
//   }

exports.createNextUpShedule = createNextUpShedule;
