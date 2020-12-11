import { LoginButton } from "./LoginButton";
import { LoginInput } from "./LoginInput";
import { LoginForm } from "./LoginForm";

export default {
  title: "Components/Login",
  component: LoginButton,
  LoginInput,
};

export const InputField = (args) => <LoginInput {...args} />;

InputField.args = {
  title: "Mitarbeiter-ID",
  error: true,
};

export const Button = (args) => <LoginButton {...args} />;
Button.args = {
  title: "Mitarbeiter-ID",
  error: true,
};

export const Login = (args) => (
  <LoginForm>
    <LoginInput title="Mitarbeiter-ID" {...args} />
    <LoginInput title="Password" {...args} />
    <LoginButton type="submit" {...args}>
      Login
    </LoginButton>
  </LoginForm>
);

Login.args = {
  error: true,
};
