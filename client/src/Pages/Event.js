import { useParams } from "react-router-dom";
import {
  SectionContainer,
  DataHeader,
  DataListContainer,
  DataSheetItem,
  DataListItem,
} from "../components/datasheets/";

// Mockup for testing

const samples = [
  {
    title: "Shedule",
    list: true,
    content: [
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
    ],
  },
  {
    title: "Setup",
    content: [
      {
        time: "10:00 - 16:00",
        title: "Meetingroom",
        room: "Raum 123",
        notes: ["Tafel 20 Personen", "Referententisch", "Seitenbufett"],
      },
    ],
  },
  {
    title: "Haustechnik",
    content: [
      {
        time: "10:00 - 16:00",
        title: "Meetingroom",
        room: "Raum 123",
        notes: ["3 Flipcharts", "1 Pinnwand", "1 Beamer"],
      },
    ],
  },
  {
    title: "Housekeeping",
    content: [
      {
        time: "10:00 - 16:00",
        title: "Meetingroom",
        room: "Raum 123",
      },
    ],
  },
  {
    title: "Sign on Board",
    content: [
      {
        time: "10:00 - 16:00",
        title: `Telekom „Future Treff“`,
      },
    ],
  },
  {
    title: "Food & Beverages",
    content: [
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
    ],
  },
];

function Event() {
  const { eventID } = useParams();

  return (
    <>
      {samples.map((sample) => {
        return (
          <SectionContainer key={sample.title}>
            <DataHeader>{sample.title}</DataHeader>
            <DataListContainer>
              {sample.list
                ? sample.content.map((content) => {
                    return <DataListItem key={content.title} {...content} />;
                  })
                : sample.content.map((content) => {
                    return <DataSheetItem key={content.title} {...content} />;
                  })}
            </DataListContainer>
          </SectionContainer>
        );
      })}
    </>
  );
}

export default Event;
