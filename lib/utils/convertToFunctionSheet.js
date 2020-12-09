const { createTime } = require("./convertTimestamp");

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
    const basicInfo = {
      time: createTime(room),
      title: room.role,
      room: room.location,
    };

    sheet[0].content.push({ ...basicInfo });
    sheet[3].content.push({ ...basicInfo });
    sheet[2].content.push({
      ...basicInfo,
      notes: [
        `${room.equipment.flipchart} Flipchart`,
        `${room.equipment.pinnboard} Pinnwände`,
        `${room.equipment.beamer} Beamer`,
      ],
    });
    sheet[1].content.push({ ...basicInfo, notes: room.notes, pax: room.pax });
  });

  document.event.forEach((singleEvent) => {
    const basicInfo = {
      time: createTime(singleEvent),
      title: singleEvent.title,
      room: singleEvent.location,
    };

    sheet[0].content.push({ ...basicInfo });
    sheet[5].content.push({
      ...basicInfo,
      notes: [...singleEvent.foods, ...singleEvent.beverages],
    });
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
