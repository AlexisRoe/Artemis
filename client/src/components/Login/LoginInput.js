import PropTypes from "prop-types";
import styled from "styled-components/macro";

const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  color: ${(props) =>
    props.state ? "var(--color-state-error)" : "var(--color-golden)"};
`;

const InputField = styled.input`
  min-height: 50px;
  border: 1px solid
    ${(props) =>
      props.state ? "var(--color-state-error)" : "var(--color-golden)"};
  padding: 0 1rem;
`;

export const LoginInput = ({ title, value, type, onChange, error }) => {
  return (
    <InputLabel state={error}>
      {title}
      <InputField
        value={value}
        type={type}
        name={`${title}`}
        id={`${title}`}
        onChange={onChange}
        state={error}
      />
    </InputLabel>
  );
};

LoginInput.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool,
};
