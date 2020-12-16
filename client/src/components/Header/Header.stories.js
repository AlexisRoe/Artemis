import NotificationHeader from "./Notification";
import MainMenu from "./MainMenu";
import Header from "./Header";

import styled from "styled-components/macro";

const Container = styled.div`
  padding-top: 50px;
`;

export default {
  title: "Components/Header",
  component: NotificationHeader,
  MainMenu,
};

export const Notification = (args) => <NotificationHeader {...args} />;
Notification.args = { error: false, message: "User/Passwort is wrong" };

export const DefaultHeader = (args) => <Header {...args} />;
DefaultHeader.args = { date: "01.04.2020", title: "Daily Overview" };

export const Menu = () => (
  <Container>
    <MainMenu />
  </Container>
);

// export const HeaderComplete = (args) => (

// return (<HeaderContainer>
//   <HeaderBar {...args} />
//   <NotificationHeader {...args} />
//   <MainMenu />
// </HeaderContainer>)

// );

export const HeaderComplete = (args) => <Header {...args} />;

HeaderComplete.args = {
  date: "01.04.2020",
  title: "Daily Overview",
  error: false,
  visibility: true,
  message: "User/Passwort is wrong",
};
