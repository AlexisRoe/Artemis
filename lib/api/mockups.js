// Mockup for testing Page Today
const sampleToday = [
  {
    title: "Next Up",
    list: true,
    content: [
      {
        time: "10:00",
        title: "Kaffeepause",
        description: "Telekom Team 1",
        room: "Lounge",
      },
      {
        time: "10:15",
        title: "Snacks",
        description: "Telekom Team 2",
        room: "Raum 123",
      },
      {
        time: "10:30",
        title: "Kaffeepause",
        description: "Telekom Team 3",
        room: "Lounge",
      },
    ],
  },
  {
    title: "Events today",
    list: false,
    content: [
      {
        time: "10:00 - 16:00",
        title: "Telekom Team 1",
        room: "120",
        setup: 0,
        pax: 120,
        pinboard: 2,
        flipchart: 1,
        eventID: "126",
      },
      {
        time: "10:00 - 16:00",
        title: "Telekom Team 2",
        room: "120",
        setup: 3,
        pax: 12,
        pinboard: 1,
        flipchart: 2,
        eventID: "123",
      },
    ],
  },
];

exports.sampleToday = sampleToday;