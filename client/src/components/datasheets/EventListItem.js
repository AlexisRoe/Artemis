import styled from "styled-components/macro";
import PropTypes from "prop-types";

import iconPax from "../../assets/icons/icon-general-pax.svg";
import iconBanquet from "../../assets/icons/icon-setup-Bankett.svg";
import iconChairCircle from "../../assets/icons/icon-setup-chairs.svg";
import iconFlipChart from "../../assets/icons/icon-setup-Flipchart.svg";
import iconClassRoom from "../../assets/icons/icon-setup-Klassen.svg";
import iconBoard from "../../assets/icons/icon-setup-tafel.svg";
import iconPinBoard from "../../assets/icons/icon-setup-pinnwand.svg";
import iconUForm from "../../assets/icons/icon-setup-uForm.svg";

const ListItem = styled.li`
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem 2rem;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 3rem 1fr 1fr 1fr;
  grid-template-rows: repeat(4, auto);
  grid-template-areas:
    "time time time time"
    "title title title title"
    "room room room room"
    "setup pax pinboard flipchart";

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

  &:before {
    content: "Raum: ";
  }
`;

const IconTag = styled.span`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const Pax = styled(IconTag)`
  grid-area: pax;
`;

const PinBoard = styled(IconTag)`
  grid-area: pinboard;
`;

const FlipChart = styled(IconTag)`
  grid-area: flipchart;
`;

const Icon = styled.img`
  width: auto;
  height: 1.5rem;
  margin-right: 0.3rem;
`;

const IconSetup = styled(Icon)`
  grid-area: setup;
`;

export const EventListItem = ({
  time,
  title,
  room,
  setup,
  pax = 0,
  pinboard = 0,
  flipchart = 0,
  onClick,
}) => {
  const icons = {
    iconClassRoom,
    iconUForm,
    iconBoard,
    iconBanquet,
    iconChairCircle,
  };

  const desc = {
    iconClassRoom: "Setup Klassenraum",
    iconUForm: "Setup U-Form",
    iconBoard: "Setup Tafel",
    iconBanquet: "Setup Bankett",
    iconChairCircle: "Setup Stuhlkreis",
  };

  return (
    <ListItem onClick={onClick}>
      <Time>{time}</Time>
      <Title>{title}</Title>
      <Room>{room}</Room>
      <IconSetup src={icons[setup]} alt={desc[setup]} />
      <Pax>
        <Icon src={iconPax} alt="Pax" />
        {pax}
      </Pax>
      <PinBoard>
        <Icon src={iconPinBoard} alt="Anzahl Pinnwände" />
        {pinboard}
      </PinBoard>
      <FlipChart>
        <Icon src={iconFlipChart} alt="Anzahl Flipcharts" />
        {flipchart}
      </FlipChart>
    </ListItem>
  );
};

EventListItem.propTypes = {
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  room: PropTypes.string.isRequired,
  setup: PropTypes.string,
  pax: PropTypes.number,
  pinboard: PropTypes.number,
  flipchart: PropTypes.number,
  onClick: PropTypes.func,
};
