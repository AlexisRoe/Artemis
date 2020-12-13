import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  SectionContainer,
  DataHeader,
  DataListContainer,
  DataSheetItem,
  DataListItem,
} from "../components/datasheets/";
import MissingData from "../components/helper/missingData";
import { getEventData } from "../utils/api";
import { useGlobalContext } from "../utils/context";
import useFetch from "../utils/hook/useAsync";

function Event() {
  const { eventID } = useParams();
  const { data } = useFetch(getEventData, eventID);
  const { changeHeaderTitle } = useGlobalContext();

  useEffect(() => {
    if (data) {
      changeHeaderTitle({ title: data.title });
    }
  }, [changeHeaderTitle, data]);

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
                    ? item.content.map((content) => {
                        return (
                          <DataListItem key={content.title} {...content} />
                        );
                      })
                    : item.content.map((content) => {
                        return (
                          <DataSheetItem key={content.title} {...content} />
                        );
                      })}
                </DataListContainer>
              )}
            </SectionContainer>
          );
        })}
    </>
  );
}

export default Event;
