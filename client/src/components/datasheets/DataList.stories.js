import { SectionContainer } from "./SectionContainer";
import { DataListItem } from "./DataListItem";
import { DataListContainer } from "./DataList";
import { DataHeader } from "./DataHeader";

const samples = [
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

export const DataList = () => {
  return (
    <SectionContainer>
      <DataHeader>Next Up</DataHeader>
      <DataListContainer>
        {samples.map((sample) => {
          return (
            <DataListItem
              key={sample.title}
              time={sample.time}
              title={sample.title}
              description={sample.description}
              room={sample.room}
            />
          );
        })}
      </DataListContainer>
    </SectionContainer>
  );
};

export default {
  title: "Components/DataList",
  component: DataList,
};
