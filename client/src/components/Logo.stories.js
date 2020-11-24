import { LogoContainer, Logo, LogoTitle } from "./Logo";
import React from "react";

export default {
  title: "Intro",
  component: Logo,
};

export const LogoIntro = () => {
  return (
    <LogoContainer>
      <Logo />
      <LogoTitle>ARTEMIS</LogoTitle>
    </LogoContainer>
  );
};
