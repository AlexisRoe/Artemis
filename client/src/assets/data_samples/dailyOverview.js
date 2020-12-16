const args = {
  arrowleft: true,
  arrowright: true,
  filter: true,
};

const nextSamples = [
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
];

const eventSamples = [
  {
    time: "10:00 - 16:00",
    title: "Telekom Team 1",
    room: "120",
    setup: 0,
    pax: 120,
    pinboard: 2,
    flipchart: 1,
  },
  {
    time: "10:00 - 16:00",
    title: "Telekom Team 2",
    room: "120",
    setup: 3,
    pax: 12,
    pinboard: 1,
    flipchart: 2,
  },
];

const mockup = {
  eventSamples,
  nextSamples,
  args,
};
