const { createTime, convertDate } = require("./convertTimestamp");
const { sortEventsByTime } = require("./sortEventsByTime");

const desc = {
  iconClassRoom: "Klassenraum",
  iconUForm: "U-Form",
  iconBoard: "Tafel",
  iconBanquet: "Bankett",
  iconChairCircle: "Stuhlkreis",
};

const translateSetup = (iconName) => desc[iconName];

const createBasicInfo = (array, key) => {
  return array.map((element) => ({
    time: createTime(element),
    title: element[key],
    room: element.location,
  }));
};

const createSetup = (basicInfoRooms, rooms) => {
  return rooms.map((room, index) => ({
    ...basicInfoRooms[index],
    notes: room.notes,
    setup: translateSetup(room.setup),
    pax: room.pax,
  }));
};

const createFacilityManagement = (basicInfoRooms, rooms) => {
  return rooms.map((room, index) => ({
    ...basicInfoRooms[index],
    notes: [
      `${room.equipment.flipchart} Flipchart`,
      `${room.equipment.pinnboard} Pinnwände`,
      `${room.equipment.beamer} Beamer`,
    ],
  }));
};

const createCatering = (basicInfoEvents, events) => {
  return events.map((event, index) => ({
    ...basicInfoEvents[index],
    notes: [...event.foods, ...event.beverages],
  }));
};

function createFunctionSheet(document) {
  const basicInfoRooms = createBasicInfo(document.rooms, "role");
  const basicInfoEvents = createBasicInfo(document.event, "title");

  const functionSheet = [
    {
      title: "Shedule",
      list: true,
      content: sortEventsByTime([...basicInfoRooms, ...basicInfoEvents]),
    },
    {
      title: "Setup",
      list: false,
      content: createSetup(basicInfoRooms, document.rooms),
    },
    {
      title: "Haustechnik",
      list: false,
      content: createFacilityManagement(basicInfoRooms, document.rooms),
    },
    {
      title: "Housekeeping",
      list: false,
      content: basicInfoRooms,
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
      content: createCatering(basicInfoEvents, document.event),
    },
  ];

  return {
    title: document.title,
    date: convertDate(document.start),
    content: functionSheet,
  };
}

exports.createFunctionSheet = createFunctionSheet;
