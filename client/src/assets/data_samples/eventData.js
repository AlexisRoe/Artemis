const args = {
  arrowleft: false,
  arrowright: true,
  filter: true,
};

const sheduleSamples = [
  {
    time: "10:00 - 16:00",
    title: "Meetingroom",
    room: "Raum 123",
  },
  {
    time: "11:00 - 11:30",
    title: "Kaffeepause 1",
    room: "Lounge",
  },
  {
    time: "13:00 - 14:00",
    title: "Mittagessen",
    room: "Restaurant",
  },
  {
    time: "15:00 - 16:00",
    title: "Kaffeepause 2",
    room: "Lounge",
  },
];

const setupSamples = [
  {
    time: "10:00 - 16:00",
    title: "Meetingroom",
    room: "Raum 123",
    notes: ["Tafel 20 Personen", "Referententisch", "Seitenbufett"],
  },
];
const technicSamples = [
  {
    time: "10:00 - 16:00",
    title: "Meetingroom",
    room: "Raum 123",
    notes: ["3 Flipcharts", "1 Pinnwand", "1 Beamer"],
  },
];
const houseSamples = [
  {
    time: "10:00 - 16:00",
    title: "Meetingroom",
    room: "Raum 123",
  },
];
const signSamples = [
  {
    time: "10:00 - 16:00",
    title: `Telekom „Future Treff“`,
  },
];

const fbSamples = [
  {
    time: "10:00 - 16:00",
    title: "Meetingroom",
    room: "Raum 123",
    notes: ["1 gr. Flasche Wasser + 2 kl. Flaschen Saft"],
  },
  {
    time: "11:00 - 11:30",
    title: "Kaffeepause",
    room: "Lounge",
    notes: ["Kaffee/Tee", "Orangensaft", "Belegte Brezeln"],
  },
  {
    time: "13:00 - 14:00",
    title: "Mittagessen",
    room: "Restaurant",
    notes: [
      "1 Glas Wein/ Bier pro Person",
      "1 Flasche Wasser / Person",
      "Tagesmenu",
    ],
  },
  {
    time: "15:00 - 16:00",
    title: "Mittagessen",
    room: "Restaurant",
    notes: ["Kaffee/ Tee", "1 stück Kuchen pro Person"],
  },
];

const mockup = {
  args,
  sheduleSamples,
  setupSamples,
  houseSamples,
  fbSamples,
  signSamples,
  technicSamples,
};
