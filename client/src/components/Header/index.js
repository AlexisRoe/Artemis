import styled from "styled-components/macro";
import Cookies from "js-cookie";
import PropTypes from "prop-types";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import NotificationHeader from "./Notification";
import MainMenu from "./MainMenu";
import logoSrc from "../../assets/logo/logo-artemis.png";
import { COOKIE_NAME } from "../../utils/config/constants";

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
  align-items: start;
  justify-content: space-between;

  h2 {
    font-family: var(--font-family-body);
    text-transform: none;
    margin: 0;
  }
`;

export default function Header({
  settings,
  showNotification,
  isError,
  message,
}) {
  const [loadingMenu, setLoadingMenu] = useState(false);
  const [toggleAnimationMenu, setToggleAnimationMenu] = useState(false);
  const history = useHistory();

  function hideMainMenu() {
    setToggleAnimationMenu(!toggleAnimationMenu);
    setTimeout(() => {
      setLoadingMenu(!loadingMenu);
    }, 1000);
  }

  function menuSwitch() {
    if (!loadingMenu) {
      setToggleAnimationMenu(!toggleAnimationMenu);
      setLoadingMenu(!loadingMenu);
    } else {
      hideMainMenu();
    }
  }

  function handleLogout() {
    hideMainMenu();
    Cookies.delete(COOKIE_NAME);
    history.push(`/login`);
  }

  return (
    <header>
      <Article>
        <InformationContainer>
          <h2>{settings?.date}</h2>
          <h2>{settings?.title}</h2>
        </InformationContainer>
        <Button onClick={menuSwitch}>
          <img src={logoSrc} alt="open/close main menu" />
        </Button>
      </Article>
      {showNotification && (
        <NotificationHeader error={isError} message={message} />
      )}
      {loadingMenu && (
        <MainMenu
          show={toggleAnimationMenu}
          onClick={hideMainMenu}
          onLogout={handleLogout}
        />
      )}
    </header>
  );
}

Header.propTypes = {
  settings: PropTypes.object,
  showNotification: PropTypes.bool,
  isError: PropTypes.bool,
  message: PropTypes.string,
};
