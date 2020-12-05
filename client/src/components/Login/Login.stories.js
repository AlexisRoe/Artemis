import { LoginButton } from "./LoginButton";
import { LoginInput } from "./LoginInput";

export default {
  title: "Components/Login",
  component: LoginButton,
  LoginInput,
};

export const Button = (args) => <LoginButton {...args} />;
export const InputField = (args) => <LoginInput {...args} />;

InputField.args = {
  title: "Mitarbeiter-ID",
  error: true,
};

Button.args = {
  title: "Mitarbeiter-ID",
  error: true,
};
