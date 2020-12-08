const {
  createTimefromUnixTimestamp,
} = require("../timeHandler/timestampConverter");

function functionSheet(document) {
  const sheet = [
    {
      title: "Shedule",
      list: true,
      content: [],
    },
    {
      title: "Setup",
      list: false,
      content: [],
    },
    {
      title: "Haustechnik",
      list: false,
      content: [],
    },
    {
      title: "Housekkeping",
      list: false,
      content: [],
    },
    {
      title: "Sign on Board",
      list: false,
      content: [
        {
          time: createTime(document),
          title: document.sign,
        },
      ],
    },
    {
      title: "Food & Beverages",
      list: false,
      content: [],
    },
  ];

  document.rooms.forEach((room) => {
    const info = {};
    info.time = createTime(room);
    info.title = room.role;
    info.room = room.location;
    sheet[0].content.push({ ...info });
    sheet[3].content.push({ ...info });
    info.notes = [
      `${room.equipment.flipchart} Flipchart`,
      `${room.equipment.pinnboard} Pinnwände`,
      `${room.equipment.beamer} Beamer`,
    ];
    sheet[2].content.push({ ...info });
    info.notes = room.notes;
    info.pax = room.pax;
    sheet[1].content.push({ ...info });
  });

  document.event.forEach((singleEvent) => {
    const info = {};
    info.time = createTime(singleEvent);
    info.title = singleEvent.title;
    info.room = singleEvent.location;
    sheet[0].content.push({ ...info });
    info.notes = [...singleEvent.foods, ...singleEvent.beverages];
    sheet[5].content.push({ ...info });
  });

  sheet[0].content.sort((a, b) => {
    if (a.time > b.time) {
      return 1;
    }
    if (a.time < b.time) {
      return -1;
    }

    return 0;
  });

  return sheet;
}

function createTime(document) {
  return `${createTimefromUnixTimestamp(
    document.start
  )} - ${createTimefromUnixTimestamp(document.end)}`;
}

exports.functionSheet = functionSheet;
