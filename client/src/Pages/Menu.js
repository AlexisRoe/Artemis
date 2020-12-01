// import { Link } from "react-router-dom";
//
// <Link to={`/day/${eventID}`}> </Link>

import { MenuBar } from "../components/Menu/MenuBar";
import {
  MenuPage,
  NavigationList,
  NavigationItem,
} from "../components/Menu/MainMenu";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <MenuPage>
      <MenuBar title="Main Menu" />
      <NavigationList>
        <Link to="/day">
          <NavigationItem>Daily Overview</NavigationItem>
        </Link>
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
}
