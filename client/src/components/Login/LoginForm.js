import styled from "styled-components/macro";
import logo from "../../assets/logo/logo-bg.png";
import PropTypes from "prop-types";

export const Form = styled.form`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  position: relative;
`;

export const Img = styled.img`
  z-index: -1;
  width: 200%;
  height: auto;
  transform: translate(-10vw, -15vh);
`;

export function LoginForm({ children, onSubmit }) {
  return (
    <Form onSubmit={onSubmit}>
      {children}
      <Img src={logo} alt="Artemis Logo" />
    </Form>
  );
}

LoginForm.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
};
