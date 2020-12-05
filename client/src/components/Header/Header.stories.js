import NotificationHeader from "./Notification";
import HeaderBar from "./Bar";
import MainMenu from "./MainMenu";

import styled from "styled-components/macro";

const Container = styled.div`
  padding-top: 50px;
`;

export default {
  title: "Components/Header",
  component: NotificationHeader,
  HeaderBar,
  MainMenu,
};

export const Notification = (args) => <NotificationHeader {...args} />;
Notification.args = { error: false, message: "User/Passwort is wrong" };

export const DefaultHeader = (args) => <HeaderBar {...args} />;
DefaultHeader.args = { date: "01.04.2020", title: "Daily Overview" };

export const Menu = () => (
  <Container>
    <MainMenu />
  </Container>
);

export const HeaderComplete = (args) => (
  <>
    <HeaderBar {...args} />
    <NotificationHeader {...args} />
    <MainMenu />
  </>
);

HeaderComplete.args = {
  date: "01.04.2020",
  title: "Daily Overview",
  error: false,
  message: "User/Passwort is wrong",
};

export const HeaderWithoutNotification = (args) => (
  <>
    <HeaderBar {...args} />
    <MainMenu />
  </>
);

HeaderWithoutNotification.args = {
  date: "01.04.2020",
  title: "Daily Overview",
};
