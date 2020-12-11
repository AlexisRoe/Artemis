import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { useState } from "react";

import logoSrc from "../../assets/logo/logo-artemis.png";
import { isDate } from "../../utils/dates/Date";
import NotificationHeader from "./Notification";
import MainMenu from "./MainMenu";

const Article = styled.article`
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

export default function Header({
  date = isDate(),
  title = "Artemis",
  error,
  visibility,
}) {
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState(false);

  function hideMainMenu() {
    setView(!view);
    setTimeout(() => {
      setLoading(!loading);
    }, 1000);
  }

  function menuSwitch() {
    if (!loading) {
      setView(!view);
      setLoading(!loading);
    } else {
      hideMainMenu();
    }
  }

  return (
    <header>
      <Article>
        <InformationContainer>
          <h2>{date}</h2>
          <h2>{title}</h2>
        </InformationContainer>
        <Button onClick={menuSwitch}>
          <img src={logoSrc} alt="open/close main menu" />
        </Button>
      </Article>
      <NotificationHeader error={error} visibility={visibility} />
      {loading && <MainMenu show={view} onClick={hideMainMenu} />}
    </header>
  );
}

Header.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string.isRequired,
  error: PropTypes.bool,
  visibility: PropTypes.bool,
};
