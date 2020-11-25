import styled from "styled-components/macro";
import logoSrc from "../assets/logo/logo-artemis.jpg";

export const Logo = styled.img.attrs({
  src: `${logoSrc}`,
  alt: "logo",
})`
  max-width: 375px;
  width: 70%;
  height: auto;
`;

export const LogoContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-bg-dark);
  width: 100%;
`;

export const LogoTitle = styled.h1`
  color: var(--color-golden-dark);
`;
