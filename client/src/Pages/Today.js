import {
  SectionContainer,
  DataHeader,
  DataListContainer,
  DataListItem,
  EventListItem,
} from "../components/datasheets/";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import MissingData from "../components/helper/missingData";
import { daily } from "../utils/api";
import { mockTimestamp } from "../utils/helpers/date";
import useAsync from "../utils/hook/useAsync";
import Header from "../components/Header";
import { Main } from "../components/helper/Main";
import ErrorHandler from "./Error";

const dateToday = mockTimestamp();
const defaultHeader = {
  title: "Daily Overview",
  date: new Intl.DateTimeFormat("de-DE", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(new Date()),
  loading: false,
  isError: false,
  message: null,
};

function Today() {
  const { timestamp } = useParams();
  const params = timestamp ? timestamp : dateToday;

  const { data, doFetch, loading, isError, message } = useAsync(daily, params);
  const history = useHistory();

  useEffect(() => {
    doFetch();
  }, [doFetch]);

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
          const ListItem = item.list ? DataListItem : EventListItem;
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

export default Today;
