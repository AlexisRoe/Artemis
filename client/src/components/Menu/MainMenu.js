import styled from "styled-components/macro";
import { MenuBar } from "./MenuBar";
import PropTypes from "prop-types";

const MenuPage = styled.article`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: var(--color-bg-dark);
  color: var(--color-font-white);
  display: grid;
  grid-template-rows: auto 1fr;
`;

const NavigationList = styled.ul`
  margin-top: 160px;
  margin-left: 3rem;
  list-style-type: none;
`;

const NavigationItem = styled.li`
  cursor: pointer;
  margin-bottom: 1rem;

  &.deactivate {
    color: var(--color-font-disabled);
    cursor: default;
  }
`;

export const MainMenu = ({ date }) => {
  return (
    <MenuPage>
      <MenuBar title="Main Menu" date={date} />
      <NavigationList>
        <NavigationItem>Daily Overview</NavigationItem>
        <NavigationItem className="deactivate">Profile</NavigationItem>
        <NavigationItem className="deactivate">Weekly Overview</NavigationItem>
        <NavigationItem className="deactivate">Room Overview</NavigationItem>
        <NavigationItem className="deactivate">Kalkulation</NavigationItem>
        <NavigationItem className="deactivate">
          Beverage Counting
        </NavigationItem>
      </NavigationList>
    </MenuPage>
  );
};

MainMenu.propTypes = {
  date: PropTypes.string,
};
