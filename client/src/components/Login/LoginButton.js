import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Button = styled.button`
  width: 100%;
  height: 50px;
  font-family: var(---font-family-header);
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.5rem;
  color: var(--color-font-white);
  background-color: ${(props) =>
    props.state ? "var(--color-state-error)" : "var(--color-golden)"};
  border: none;
  margin-top: 2rem;
  cursor: pointer;
`;

export function LoginButton({ error }) {
  return (
    <>
      <Button state={error}>Login</Button>
    </>
  );
}

LoginButton.propTypes = {
  error: PropTypes.bool,
};
