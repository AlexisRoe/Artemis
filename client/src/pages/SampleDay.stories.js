import { DataHeader } from "../components/datasheets/DataHeader";
import { DataListContainer } from "../components/datasheets/DataList";
import { DataListItem } from "../components/datasheets/DataListItem";
import { SectionContainer } from "../components/datasheets/SectionContainer";
import { MenuBar } from "../components/Menu/MenuBar";
import { NotificationArea } from "../components/Menu/NotificationArea";
import { DataSheetItem } from "../components/datasheets/DataSheetItem";

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

export const Day = () => {
  return (
    <>
      <MenuBar title="Daily Overview" date="01.01.2020" />
      <NotificationArea {...args} />
      <SectionContainer>
        <DataHeader>Shedule</DataHeader>
        <DataListContainer>
          {sheduleSamples.map((sample) => {
            return <DataListItem key={sample.title} {...sample} />;
          })}
        </DataListContainer>
      </SectionContainer>
      <SectionContainer>
        <DataHeader>Setup</DataHeader>
        <DataListContainer>
          {setupSamples.map((sample) => {
            return <DataSheetItem key={sample.title} {...sample} />;
          })}
        </DataListContainer>
      </SectionContainer>
      <SectionContainer>
        <DataHeader>Haustechnik</DataHeader>
        <DataListContainer>
          {technicSamples.map((sample) => {
            return <DataSheetItem key={sample.title} {...sample} />;
          })}
        </DataListContainer>
      </SectionContainer>
      <SectionContainer>
        <DataHeader>Housekepping</DataHeader>
        <DataListContainer>
          {houseSamples.map((sample) => {
            return <DataSheetItem key={sample.title} {...sample} />;
          })}
        </DataListContainer>
      </SectionContainer>
      <SectionContainer>
        <DataHeader>Sign on Board</DataHeader>
        <DataListContainer>
          {signSamples.map((sample) => {
            return <DataSheetItem key={sample.title} {...sample} />;
          })}
        </DataListContainer>
      </SectionContainer>
      <SectionContainer>
        <DataHeader>Food & Beverages</DataHeader>
        <DataListContainer>
          {fbSamples.map((sample) => {
            return <DataSheetItem key={sample.title} {...sample} />;
          })}
        </DataListContainer>
      </SectionContainer>
    </>
  );
};

export default {
  title: "Pages/Day",
  component: Day,
};
