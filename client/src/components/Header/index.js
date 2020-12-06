import HeaderBar from "./Bar";
import { HeaderContainer } from "./Header";
import MainMenu from "./MainMenu";
import NotificationHeader from "./Notification";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderBar />
      <NotificationHeader />
      <MainMenu />
    </HeaderContainer>
  );
}
