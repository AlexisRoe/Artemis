import styled from "styled-components/macro";
import PropTypes from "prop-types";

import logoSrc from "../../assets/logo/logo-artemis.png";
import { isDate } from "../../utils/dates/Date";

const Header = styled.header`
  width: 100%;
  z-index: 30;
  min-width: 375px;
  min-height: 100px;
  padding: 1.2rem;
  background-color: var(--color-bg-dark);
  color: var(--color-font-white);
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 2rem;
  position: relative;

  :not(aside) + nav {
    transform: translateY(3rem);
  }
`;

const Button = styled.button`
  border: 0.5rem solid var(--color-bg-dark);
  outline: none;
  z-index: 10;
  border-radius: 50%;
  background-color: var(--color-bg-dark);
  width: 100px;
  height: 100px;
  grid-column: 1/2;
  position: absolute;
  bottom: -25%;

  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }
`;

const InformationContainer = styled.div`
  grid-column: 2/3;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-family: var(--font-family-body);
    text-transform: none;
  }
`;

export default function HeaderBar({ date = isDate(), title }) {
  return (
    <Header>
      <InformationContainer>
        <h2>{date}</h2>
        <h2>{title}</h2>
      </InformationContainer>
      <Button>
        <img src={logoSrc} alt="open/close main menu" />
      </Button>
    </Header>
  );
}

HeaderBar.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string.isRequired,
};
