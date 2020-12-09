const { createTime } = require(".");

function createFunctionSheet(document) {
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
    const basicInfo = {};
    basicInfo.time = createTime(room);
    basicInfo.title = room.role;
    basicInfo.room = room.location;
    sheet[0].content.push({ ...basicInfo });
    sheet[3].content.push({ ...basicInfo });

    const setupInfo = { ...basicInfo };
    setupInfo.notes = [
      `${room.equipment.flipchart} Flipchart`,
      `${room.equipment.pinnboard} Pinnwände`,
      `${room.equipment.beamer} Beamer`,
    ];
    sheet[2].content.push({ ...setupInfo });

    const roomInfo = { ...basicInfo };
    roomInfo.notes = room.notes;
    roomInfo.pax = room.pax;
    sheet[1].content.push({ ...roomInfo });
  });

  document.event.forEach((singleEvent) => {
    const basicInfo = {};
    basicInfo.time = createTime(singleEvent);
    basicInfo.title = singleEvent.title;
    basicInfo.room = singleEvent.location;
    sheet[0].content.push({ ...basicInfo });

    const cateringInfo = { ...basicInfo };
    cateringInfo.notes = [...singleEvent.foods, ...singleEvent.beverages];
    sheet[5].content.push({ ...cateringInfo });
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

exports.createFunctionSheet = createFunctionSheet;
