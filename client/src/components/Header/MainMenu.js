import styled from "styled-components/macro";

const Nav = styled.nav`
  width: 100%;
  background-color: var(--color-bg-dark);
  padding: 50px 0px;
  padding-left: 20vw;
  position: relative;
  z-index: 20;

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

const Ul = styled.ul`
  list-style-type: none;
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

  a > li {
    color: var(--color-font-white) !important;
    cursor: pointer;
  }
`;

const Button = styled.button`
  margin-top: 2rem;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  color: var(--color-golden);
  font-weight: 600;
  font-size: 20px;
`;

export default function MainMenu() {
  return (
    <Nav>
      <Ul>
        <a href="/">
          <li>Daily Overview</li>
        </a>
        <li>Profile</li>
        <li>Weekly Overview</li>
        <li>Room Overview</li>
        <li>Kalkulation</li>
        <li>Beverage Counting</li>
      </Ul>
      <Button>Logout</Button>
    </Nav>
  );
}
