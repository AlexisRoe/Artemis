import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  SectionContainer,
  DataHeader,
  DataListContainer,
  DataSheetItem,
  DataListItem,
} from "../components/datasheets/";
import useAsync from "../utils/hook/useAsync";
import { event } from "../utils/api";
import { Main } from "../components/helper/Main";
import ErrorHandler from "./Error";
import Header from "../components/Header";
import MissingData from "../components/helper/missingData";

const defaultHeader = {
  title: "Event Overview",
  date: new Intl.DateTimeFormat("de-DE", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(new Date()),
  loading: false,
  isError: false,
  message: null,
};

function Event() {
  const { eventID } = useParams();
  const history = useHistory();
  const { data, doFetch, loading, isError, message, metaData } = useAsync(
    event,
    eventID
  );

  useEffect(() => {
    doFetch();
    defaultHeader.title = metaData?.title;
  }, [doFetch, metaData?.title]);

  return (
    <>
      <Header
        settings={defaultHeader}
        showNotification={loading}
        isError={isError}
        message={message}
      />
      <Main>
        {isError && <ErrorHandler />}
        {data?.map((item) => {
          const ListItem = item.list ? DataListItem : DataSheetItem;
          return (
            <SectionContainer key={item.title}>
              <DataHeader>{item.title}</DataHeader>
              {!item.content.length ? (
                <MissingData />
              ) : (
                <DataListContainer>
                  {item.content.map((content) => (
                    <ListItem
                      key={content.title}
                      {...content}
                      onClick={() => history.push(`/event/${content.id}`)}
                    />
                  ))}
                </DataListContainer>
              )}
            </SectionContainer>
          );
        })}
      </Main>
    </>
  );
}

export default Event;
