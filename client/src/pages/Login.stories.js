import { LoginButton } from "../components/Login/LoginButton";
import { LoginInput } from "../components/Login/LoginInput";
import { Logo } from "../components/Login/Logo";
import { LoginForm } from "../components/Login/LoginForm";
import { LoginContainer } from "../components/Login/LoginContainer";

export const Login = () => {
  return (
    <LoginContainer>
      <Logo />
      <LoginForm>
        <LoginInput title="Mitarbeiter-ID" />
        <LoginInput title="Password" />
        <LoginButton type="submit">Login</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default {
  title: "Pages/Login",
  component: Login,
};
