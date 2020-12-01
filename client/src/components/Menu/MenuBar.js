import styled from "styled-components/macro";
import PropTypes from "prop-types";
import logoSrc from "../../assets/logo/logo-artemis.png";
import { isDate } from "../../utils/dates/Date";
import { Link, useLocation } from "react-router-dom";

const Header = styled.header`
  z-index: 100;
  width: 100%;
  min-width: 375px;
  min-height: 100px;
  padding: 1.2rem;
  background-color: var(--color-bg-dark);
  color: var(--color-font-white);
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 2rem;
  position: fixed;
  top: 0;
  left: 0;
`;

const PictureContainer = styled.div`
  position: absolute;
  z-index: 1;
  bottom: -25%;
  border-radius: 50%;
  background-color: var(--color-bg-dark);
  width: 100px;
  height: 100px;
  padding: 0.5rem;
  grid-column: 1/2;
`;

const MenuLogoPicture = styled.img`
  width: 100%;
  height: auto;
  cursor: ${(props) => (props.isCursor ? "pointer" : "default")};
`;

const LogoMenu = ({ src, isCursor }) => {
  return (
    <PictureContainer>
      <MenuLogoPicture src={src} alt="Main Menu" isCursor={isCursor} />
    </PictureContainer>
  );
};

const InformationContainer = styled.div`
  grid-column: 2/3;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Informations = styled.h2`
  font-family: var(--font-family-body);
  text-transform: none;
`;

export const MenuBar = ({ title }) => {
  const date = isDate();
  const { pathname } = useLocation();

  return (
    <Header>
      {pathname !== `/menu` ? (
        <Link to={`/menu`}>
          <LogoMenu src={logoSrc} isCursor={true} />
        </Link>
      ) : (
        <LogoMenu src={logoSrc} isCursor={false} />
      )}

      <InformationContainer>
        <Informations>{date}</Informations>
        <Informations>{title}</Informations>
      </InformationContainer>
    </Header>
  );
};

MenuBar.propTypes = {
  title: PropTypes.string.isRequired,
};

LogoMenu.propTypes = {
  src: PropTypes.string,
  isCursor: PropTypes.bool,
};
