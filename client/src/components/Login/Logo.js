import styled from "styled-components/macro";
import logoSrc from "../../assets/logo/logo-artemis.jpg";

const LogoContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-bg-dark);
  width: 100%;
  min-height: 200px;
  padding: 1rem;
`;
const LogoPic = styled.img.attrs({
  src: `${logoSrc}`,
  alt: "logo",
})`
  max-width: 200px;
  width: 50%;
  height: auto;
  margin-bottom: 0.5rem;
`;

const LogoTitle = styled.h1`
  color: var(--color-golden-dark);
`;

export const Logo = () => {
  return (
    <>
      <LogoContainer>
        <LogoPic />
        <LogoTitle>ARTEMIS</LogoTitle>
      </LogoContainer>
    </>
  );
};
