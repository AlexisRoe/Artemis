import { DataSheetItem } from "../components/datasheets/DataSheetItem";
import { DataListContainer } from "../components/datasheets/DataList";

const samples = [
  {
    time: "10:00 - 16:00",
    title: "Meetingroom",
    room: "Raum 123",
    notes: ["3 Flipcharts", "1 Pinnwand", "1 Beamer"],
  },
];

export const DataSheetSimple = () => {
  return (
    <DataListContainer>
      {samples.map((sample) => {
        return <DataSheetItem key={sample.title} {...sample} />;
      })}
    </DataListContainer>
  );
};

export default {
  title: "Components/DataLists",
  component: DataSheetSimple,
};
