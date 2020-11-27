import styled from "styled-components";
import PropTypes from "prop-types";

const ListItem = styled.li`
  width: 100%;
  padding: 0.6rem 1rem 0.6rem 2rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "time   titel"
    "time   description"
    "time   room";

  &:nth-child(2n) {
    background-color: var(--color-bg-sub);
  }
`;

const Time = styled.h4`
  grid-area: time;

  &:after {
    content: " Uhr";
  }
`;

const Titel = styled.h4`
  grid-area: "titel";
  margin: 0;
`;

const Description = styled.span`
  grid-area: description;
`;

const Room = styled.span`
  grid-area: room;
`;

export const DataListItem = ({ time, title, description, room }) => {
  return (
    <ListItem>
      <Time>{time}</Time>
      <Titel>{title}</Titel>
      <Description>{description}</Description>
      <Room>{room}</Room>
    </ListItem>
  );
};

DataListItem.propTypes = {
  time: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  room: PropTypes.string,
};