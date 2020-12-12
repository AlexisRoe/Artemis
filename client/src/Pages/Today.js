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

function Today() {
  const {
    changeHeaderTitle,
    toggleNotification,
    toogleLoading,
  } = useGlobalContext();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData(timestamp) {
      try {
        toogleLoading();
        const response = await getDailyData(timestamp);
        setData(response);
        toogleLoading();
      } catch (error) {
        console.error(error.message);
        toggleNotification("an error accured", true);
      }
    }
    changeHeaderTitle("Daily Overview");
    getData(mockTimestamp());
  }, [changeHeaderTitle, toggleNotification, toogleLoading]);

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
                        <DataListItem key={content.title} {...content} />
                      ))
                    : sample.content.map((content) => (
                        <EventListItem key={content.title} {...content} />
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
