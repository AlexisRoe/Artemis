import styled from "styled-components";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const ListItem = styled.li`
  width: 100%;
  padding: 0.6rem 1rem 0.6rem 2rem;
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "time   title"
    "time   description"
    "time   room";

  :not(:only-child):nth-child(2n + 1) {
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
  grid-area: title;
  margin: 0;
`;

const Description = styled.span`
  grid-area: description;
`;

const Room = styled.span`
  grid-area: room;
`;

export const DataListItem = ({ time, title, description, room, onClick }) => {
  return (
    <ListItem onClick={onClick}>
      <Time>{time}</Time>
      <Titel>{title}</Titel>
      <Description>{description}</Description>
      <Room>{room}</Room>
    </ListItem>
  );
};

DataListItem.propTypes = {
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  room: PropTypes.string,
  onClick: PropTypes.func,
};
