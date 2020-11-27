import { SectionContainer } from "../components/datasheets/SectionContainer";
import { DataListContainer } from "../components/datasheets/DataList";
import { DataHeader } from "../components/datasheets/DataHeader";
import { EventListItem } from "../components/datasheets/EventListItem";

const samples = [
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

export const Event = () => {
  return (
    <SectionContainer>
      <DataHeader>Events today</DataHeader>
      <DataListContainer>
        {samples.map((sample) => {
          return <EventListItem key={sample.title} {...sample} />;
        })}
      </DataListContainer>
    </SectionContainer>
  );
};

export default {
  title: "Components/DataLists",
  component: Event,
};