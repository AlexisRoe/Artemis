import { DataHeader } from "../components/datasheets/DataHeader";
import { DataListContainer } from "../components/datasheets/DataList";
import { DataListItem } from "../components/datasheets/DataListItem";
import { SectionContainer } from "../components/datasheets/SectionContainer";
import { MenuBar } from "../components/Menu/MenuBar";
import { NotificationArea } from "../components/Menu/NotificationArea";
import { EventListItem } from "../components/datasheets/EventListItem";

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

export const Dayoverview = () => {
  return (
    <>
      <MenuBar title="Daily Overview" date="01.01.2020" />
      <NotificationArea {...args} />
      <SectionContainer>
        <DataHeader>Next Up</DataHeader>
        <DataListContainer>
          {nextSamples.map((sample) => {
            return <DataListItem key={sample.title} {...sample} />;
          })}
        </DataListContainer>
      </SectionContainer>
      <SectionContainer>
        <DataHeader>Events today</DataHeader>
        <DataListContainer>
          {eventSamples.map((sample) => {
            return <EventListItem key={sample.title} {...sample} />;
          })}
        </DataListContainer>
      </SectionContainer>
    </>
  );
};

export default {
  title: "Pages/Dayoverview",
  component: Dayoverview,
};
