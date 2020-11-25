import { LoginInput } from "./LoginInput";
import React from "react";

export default {
  title: "Login",
  component: LoginInput,
};

export const InputMitarbeiter = () => <LoginInput title="Mitarbeiter-ID" />;
export const InputPassword = () => <LoginInput title="Password" />;
