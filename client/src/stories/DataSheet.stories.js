import { DataSheetItem } from "../components/datasheets/DataSheetItem";
import { SectionContainer } from "../components/datasheets/SectionContainer";
import { DataListContainer } from "../components/datasheets/DataList";
import { DataHeader } from "../components/datasheets/DataHeader";

const samples = [
  {
    time: "10:00 - 16:00",
    title: "Meetingroom",
    room: "Raum 123",
    notes: ["3 Flipcharts", "1 Pinnwand", "1 Beamer"],
  },
];

export const DataSheet = () => {
  return (
    <SectionContainer>
      <DataHeader>Haustechnik</DataHeader>
      <DataListContainer>
        {samples.map((sample) => {
          return <DataSheetItem key={sample.title} {...sample} />;
        })}
      </DataListContainer>
    </SectionContainer>
  );
};

export default {
  title: "Components/DataLists",
  component: DataSheet,
};
