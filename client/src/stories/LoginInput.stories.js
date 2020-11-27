import { LoginInput } from "../components/Login/LoginInput";

export default {
  title: "Components/Login",
  component: LoginInput,
};

export const InputMitarbeiter = () => <LoginInput title="Mitarbeiter-ID" />;
export const InputPassword = () => <LoginInput title="Password" />;
