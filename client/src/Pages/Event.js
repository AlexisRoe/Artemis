import { useParams } from "react-router-dom";

function Event() {
  const { eventID } = useParams();

  return `${eventID}`;
}

export default Event;
