import React, { useContext } from "react";
import { AuthStateContext } from "../utils/contextApi/contextAPI";
import { useHistory } from "react-router-dom";
import { MenuBar } from "../components/Menu/MenuBar";
import {
  SectionContainer,
  DataHeader,
  DataListContainer,
  DataListItem,
  EventListItem,
} from "../components/datasheets/";

// Mockup for testing

const samples = [
  {
    title: "Next Up",
    list: true,
    content: [
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
    ],
  },
  {
    title: "Events today",
    list: false,
    content: [
      {
        time: "10:00 - 16:00",
        title: "Telekom Team 1",
        room: "120",
        setup: 0,
        pax: 120,
        pinboard: 2,
        flipchart: 1,
        eventID: "126",
      },
      {
        time: "10:00 - 16:00",
        title: "Telekom Team 2",
        room: "120",
        setup: 3,
        pax: 12,
        pinboard: 1,
        flipchart: 2,
        eventID: "123",
      },
    ],
  },
];

function Today() {
  const [user] = useContext(AuthStateContext);
  const history = useHistory();

  if (!user.auth_token) {
    history.push("/");
    return null;
  }

  return (
    <>
      <MenuBar title="Daily Overview" />
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
                    return <EventListItem key={content.title} {...content} />;
                  })}
            </DataListContainer>
          </SectionContainer>
        );
      })}
    </>
  );
}

export default Today;
