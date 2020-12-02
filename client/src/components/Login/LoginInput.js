import PropTypes from "prop-types";
import styled from "styled-components/macro";

const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const InputField = styled.input`
  min-height: 50px;
  border: 1px solid var(--color-golden);
  padding: 0 1rem;
`;

export const LoginInput = ({ title, value, type, onChange }) => {
  return (
    <InputLabel>
      {title}
      <InputField
        value={value}
        type={type}
        name={`${title}`}
        id={`${title}`}
        onChange={onChange}
      />
    </InputLabel>
  );
};

LoginInput.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};
