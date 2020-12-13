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
import MissingData from "../components/helper/missingData";
import { useHistory } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { convertTimefromUnixTime } from "../utils/helpers/date";
// import { TITLE_DAY } from "../utils/config/constants";

function Today() {
  // const { timestamp } = useParams() || mockTimestamp();
  // const { data } = useFetch (getDailyData, timestamp);
  // const time = convertTimefromUnixTime(timestamp);
  // const { changeHeaderTitle } = useGlobalContext();
  // useEffect(() => {
  //   changeHeaderTitle({ title: TITLE_DAY, time });
  // }, [changeHeaderTitle]);

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
        setData(response.content);
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
        data.map((item) => {
          return (
            <SectionContainer key={item.title}>
              <DataHeader>{item.title}</DataHeader>
              {!item.content.length ? (
                <MissingData />
              ) : (
                <DataListContainer>
                  {item.list
                    ? item.content.map((content) => (
                        <DataListItem
                          key={content.id}
                          {...content}
                          onClick={() => history.push(`/event/${content.id}`)}
                        />
                      ))
                    : item.content.map((content) => (
                        <EventListItem
                          key={content.id}
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
