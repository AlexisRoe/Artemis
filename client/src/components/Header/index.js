import styled from "styled-components/macro";
import { useState } from "react";
import { useGlobalContext } from "../../utils/context";
import logoSrc from "../../assets/logo/logo-artemis.png";
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
  align-items: start;
  justify-content: space-between;

  h2 {
    font-family: var(--font-family-body);
    text-transform: none;
    margin: 0;
  }
`;

export default function Header() {
  const [loadingMenu, setLoadingMenu] = useState(false);
  const [toggleAnimationMenu, setToggleAnimationMenu] = useState(false);
  const {
    errorState,
    notificationMessage,
    showNotification,
    toggleLogin,
    header,
  } = useGlobalContext();

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
    toggleLogin(false);
  }

  return (
    <header>
      <Article>
        <InformationContainer>
          <h2>{header?.date}</h2>
          <h2>{header?.title}</h2>
        </InformationContainer>
        <Button onClick={menuSwitch}>
          <img src={logoSrc} alt="open/close main menu" />
        </Button>
      </Article>
      {showNotification && (
        <NotificationHeader error={errorState} message={notificationMessage} />
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
