import styled from "styled-components";
import PropTypes from "prop-types";

const ItemContainer = styled.li`
  width: 100%;
  padding: 0.6rem 1rem 0.6rem 2rem;
  display: grid;
  column-gap: 0.5rem;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: repeat(5, auto);
  grid-template-areas:
    "time   title"
    "time   room"
    "time  pax"
    "time  setup"
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
`;
const Setup = styled.span`
  grid-area: setup;
  margin-bottom: 1rem;
`;
const Pax = styled.span`
  grid-area: pax;
`;

const NotesContainer = styled.ul`
  grid-area: notes;
  list-style: none;
`;

export const DataSheetItem = ({ time, title, room, notes, pax, setup }) => {
  return (
    <ItemContainer>
      <Time>{time}</Time>
      <Title>{title}</Title>
      {room && <Room>{room}</Room>}
      {setup && <Setup>{setup}</Setup>}
      {pax && <Pax>{pax} pax</Pax>}
      <NotesContainer>
        {notes &&
          notes.map((note) => {
            return <li key={note}>{note}</li>;
          })}
      </NotesContainer>
    </ItemContainer>
  );
};

DataSheetItem.propTypes = {
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  room: PropTypes.string,
  notes: PropTypes.arrayOf(PropTypes.string),
  setup: PropTypes.string,
  pax: PropTypes.number,
};
