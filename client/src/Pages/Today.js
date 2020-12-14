import {
  SectionContainer,
  DataHeader,
  DataListContainer,
  DataListItem,
  EventListItem,
} from "../components/datasheets/";
import { useEffect } from "react";
import PropTypes from "prop-types";
// import { mockTimestamp } from "../utils/helpers";
import MissingData from "../components/helper/missingData";
import { daily } from "../utils/api";
import { useHistory, useParams } from "react-router-dom";
import { convertTimefromUnixTime } from "../utils/helpers/date";
import { TITLE_DAY } from "../utils/config/constants";
import { useGlobalContext } from "../utils/context";
import useFetch from "../utils/hook/useAsync";

function Today({ dateToday }) {
  const { timestamp } = useParams();
  const params = timestamp ? convertTimefromUnixTime(timestamp) : dateToday;

  const { setTitle } = useGlobalContext();
  const { data, doFetch } = useFetch(daily, params);
  const history = useHistory();

  useEffect(() => {
    setTitle(TITLE_DAY);
    doFetch();
  }, [doFetch, setTitle]);

  return (
    <>
      {data?.map((item) => {
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
                        key={content.title}
                        {...content}
                        onClick={() => history.push(`/event/${content.id}`)}
                      />
                    ))
                  : item.content.map((content) => (
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

Today.propTypes = {
  dateToday: PropTypes.number,
};
