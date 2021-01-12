import logoSrc from "../assets/logo/logo-artemis.png";
import { Article, Button, InformationContainer } from "../components/Header";
import styled from "styled-components/macro";
import {
  DataSheetSamples,
  EventSamples,
} from "../components/datasheets/DataSamples";
import { DataListContainer } from "../components/datasheets/DataList";
import { EventListItem } from "../components/datasheets/EventListItem";
import { DataSheetItem } from "../components/datasheets/DataSheetItem";
import { DataHeader } from "../components/datasheets/DataHeader";

const Main = styled.main`
  width: 100%;
  padding-top: 200px;

  > * {
    width: 100%;
  }
`;

export const Today = () => {
  return (
    <>
      <header>
        <Article>
          <InformationContainer>
            <h2>01.01.2021</h2>
            <h2>Login</h2>
          </InformationContainer>
          <Button>
            <img src={logoSrc} alt="open/close main menu" />
          </Button>
        </Article>
      </header>
      <Main>
        <DataListContainer>
          <DataHeader>Next to ToDo</DataHeader>
          {DataSheetSamples.map((sample) => {
            return <DataSheetItem key={sample.title} {...sample} />;
          })}
        </DataListContainer>
        <DataListContainer>
          <DataHeader>Events Today</DataHeader>
          {EventSamples.map((sample) => {
            return <EventListItem key={sample.title} {...sample} />;
          })}
        </DataListContainer>
      </Main>
    </>
  );
};

export default {
  title: "Pages",
  components: Today,
};
