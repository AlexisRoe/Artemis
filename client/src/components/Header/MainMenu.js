import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

export const Nav = styled.nav`
  background-color: var(--color-bg-dark);
  padding: 50px 0px;
  padding-left: 20vw;
  position: relative;
  z-index: 20;
  animation: 1s ${(props) => (props.state ? "fadeIn" : "fadeOut")} ease-in-out;
  animation-fill-mode: forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(-100%);
    }
  }

  :before {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 0 25px 25px;
    border-color: var(--color-bg-dark) transparent;
    width: 0;
    top: -22px;
    left: 45px;
    z-index: 1;
  }
`;

export const Ul = styled.ul`
  list-style-type: none;
  padding-left: 0;
  a,
  a:hover,
  a:focus,
  a:visited {
    text-decoration: none;
    color: var(--color-font-white);
  }

  li {
    margin-bottom: 1rem;
    color: var(--color-font-disabled);
    cursor: default;
  }

  .link {
    color: var(--color-font-white) !important;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  margin-top: 2rem;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  color: var(--color-golden);
  font-weight: 600;
  font-size: 20px;
`;

export default function MainMenu({ show, onClick, onLogout }) {
  const history = useHistory();

  function handleLink(target) {
    onClick();
    setTimeout(() => {
      history.push(target);
    }, 1000);
  }

  return (
    <Nav state={show}>
      <Ul>
        <li onClick={() => handleLink("/day")} className="link">
          Daily Overview
        </li>
        <li>Profile</li>
        <li>Weekly Overview</li>
        <li>Room Overview</li>
        <li>Kalkulation</li>
        <li>Beverage Counting</li>
      </Ul>
      <Button onClick={onLogout}>Logout</Button>
    </Nav>
  );
}

MainMenu.propTypes = {
  show: PropTypes.bool,
  onClick: PropTypes.func,
  onLogout: PropTypes.func,
};
