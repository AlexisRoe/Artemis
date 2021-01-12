import logoSrc from "../assets/logo/logo-artemis.png";
import { Article, Button, InformationContainer } from "../components/Header";
import { LoginButton } from "../components/Login/LoginButton";
import { LoginInput } from "../components/Login/LoginInput";
import { LoginForm } from "../components/Login/LoginForm";
import styled from "styled-components/macro";

const Main = styled.main`
  width: 100%;
  padding-top: 100px;

  > * {
    width: 100%;
  }
`;

export const Login = () => {
  return (
    <>
      <header>
        <Article>
          <InformationContainer>
            <h2>01.01.2021</h2>
            <h2>Login</h2>
          </InformationContainer>
          <Button>
            <img src={logoSrc} alt="open/close main menu" />
          </Button>
        </Article>
      </header>
      <Main>
        <LoginForm>
          <LoginInput title="Mitarbeiter-ID" type="text" />
          <LoginInput title="Password" type="password" />
          <LoginButton type="submit">Login</LoginButton>
        </LoginForm>
      </Main>
    </>
  );
};

export default {
  title: "Pages",
  components: Login,
};
