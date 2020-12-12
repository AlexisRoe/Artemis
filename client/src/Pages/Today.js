import {
  SectionContainer,
  DataHeader,
  DataListContainer,
  DataListItem,
  EventListItem,
} from "../components/datasheets/";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../utils/context";
import { mockTimestamp } from "../utils/helpers";
import { getDailyData } from "../utils/api";
import { useHistory } from "react-router-dom";

function Today() {
  const {
    changeHeaderTitle,
    toggleNotification,
    hideNotification,
    displayNotification,
  } = useGlobalContext();
  const [data, setData] = useState(null);
  const history = useHistory();

  useEffect(() => {
    async function getData(timestamp) {
      try {
        displayNotification();
        const response = await getDailyData(timestamp);
        setData(response);
        hideNotification();
      } catch (error) {
        console.error(error.message);
        toggleNotification("an error accured", true);
      }
    }
    changeHeaderTitle("Daily Overview");
    getData(mockTimestamp());
  }, []);

  return (
    <>
      {data &&
        data.map((sample) => {
          return (
            <SectionContainer key={sample.title}>
              <DataHeader>{sample.title}</DataHeader>
              {!sample.content.length ? (
                <div>nix zu rendern</div>
              ) : (
                <DataListContainer>
                  {sample.list
                    ? sample.content.map((content) => (
                        <DataListItem
                          key={content.title}
                          {...content}
                          onClick={() => history.push(`/event/${content.id}`)}
                        />
                      ))
                    : sample.content.map((content) => (
                        <EventListItem
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
    </>
  );
}

export default Today;
