import HeaderBar from "./Bar";
import MainMenu from "./MainMenu";
import { NotificationHeader } from "./Notification";

export default function Header() {
  return (
    <>
      <HeaderBar date="01.04.2020" title="Daily Overview" />
      <NotificationHeader error={false} message="User/Passwort is wrong" />
      <MainMenu />
    </>
  );
}
