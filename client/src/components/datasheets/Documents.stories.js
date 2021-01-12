import { DataListContainer } from "./DataList";
import { EventListItem } from "./EventListItem";
import { DataSheetItem } from "./DataSheetItem";
import { DataListItem } from "./DataListItem";

import { DataListSamples, DataSheetSamples, EventSamples } from "./DataSamples";

export const EventItem = () => {
  return (
    <DataListContainer>
      {EventSamples.map((sample) => {
        return <EventListItem key={sample.title} {...sample} />;
      })}
    </DataListContainer>
  );
};

export const DataSheetSimple = () => {
  return (
    <DataListContainer>
      {DataSheetSamples.map((sample) => {
        return <DataSheetItem key={sample.title} {...sample} />;
      })}
    </DataListContainer>
  );
};

export const NextUp = () => {
  return (
    <DataListContainer>
      {DataListSamples.map((sample) => {
        return <DataListItem key={sample.title} {...sample} />;
      })}
    </DataListContainer>
  );
};

export default {
  title: "Components/Documents",
  component: EventItem,
  DataSheetSimple,
  NextUp,
};
