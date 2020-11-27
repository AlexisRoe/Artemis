import { DataListItem } from "../components/datasheets/DataListItem";
import { DataListContainer } from "../components/datasheets/DataList";

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
];

export const NextUp = () => {
  return (
    <DataListContainer>
      {samples.map((sample) => {
        return <DataListItem key={sample.title} {...sample} />;
      })}
    </DataListContainer>
  );
};

export default {
  title: "Components/DataLists",
  component: NextUp,
};
