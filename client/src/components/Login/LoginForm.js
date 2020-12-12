import styled from "styled-components/macro";
import logo from "../../assets/logo/logo-bg.png";
import PropTypes from "prop-types";

export const Form = styled.form`
  width: 100%;
  height: calc(100vh - 100px);
  padding: 5rem;
  padding-top: 20vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -25vw 30vh;
`;

export const Img = styled.img`
  z-index: -1;
  width: 200%;
  height: auto;
  transform: translate(-10vw, -15vh);
`;

export function LoginForm({ children, onSubmit }) {
  return <Form onSubmit={onSubmit}>{children}</Form>;
}

LoginForm.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
};
