import styled from "styled-components";
import PropTypes from "prop-types";

const ItemContainer = styled.li`
  width: 100%;
  padding: 0.6rem 1rem 0.6rem 2rem;
  display: grid;
  column-gap: 0.5rem;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "time   title"
    "time   room"
    "notes  notes";

  &:not(:only-child):nth-child(2n + 1) {
    background-color: var(--color-bg-sub);
  }
`;

const Time = styled.h4`
  grid-area: time;

  &:after {
    content: " Uhr";
  }
`;

const Title = styled.h4`
  grid-area: title;
`;

const Room = styled.span`
  grid-area: room;
  margin-bottom: 1rem;
`;

const Note = styled.li`
  grid-area: notes;
  list-style: none;
`;

export const DataSheetItem = ({ time, title, room, notes = [""] }) => {
  return (
    <ItemContainer>
      <Time>{time}</Time>
      <Title>{title}</Title>
      <Room>{room}</Room>
      <ul>
        {notes.map((note) => {
          return <Note key={note}>{note}</Note>;
        })}
      </ul>
    </ItemContainer>
  );
};

DataSheetItem.propTypes = {
  time: PropTypes.string,
  title: PropTypes.string,
  room: PropTypes.string,
  notes: PropTypes.arrayOf(PropTypes.string),
};
