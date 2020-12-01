import { DataListContainer } from "../components/datasheets/DataList";
import { DataSheetItem } from "../components/datasheets/DataSheetItem";

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
];

export const DataSheetComplex = () => {
  return (
    <DataListContainer>
      {fbSamples.map((sample) => {
        return <DataSheetItem key={sample.title} {...sample} />;
      })}
    </DataListContainer>
  );
};

export default {
  title: "Components/DataLists",
  component: DataSheetComplex,
};
