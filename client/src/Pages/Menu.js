import { useContext } from "react";
import { MenuBar } from "../components/Menu/MenuBar";
import { AuthStateContext } from "../utils/contextApi/contextAPI";
import {
  MenuPage,
  NavigationList,
  NavigationItem,
} from "../components/Menu/MainMenu";
import { Link, useHistory } from "react-router-dom";

export default function Menu() {
  const [user] = useContext(AuthStateContext);
  const history = useHistory();

  if (!user.auth_token) {
    history.push("/");
    return null;
  }
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
