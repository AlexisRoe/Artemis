import PropTypes from "prop-types";
import styled from "styled-components/macro";

export const LoginInput = ({ title }) => {
  return (
    <InputLabel>
      {title}
      <Inputfield type="text" name={`${title}`} id={`${title}`} />
    </InputLabel>
  );
};

LoginInput.propTypes = {
  title: PropTypes.string,
};

const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const Inputfield = styled.input`
  min-height: 50px;
  border: 1px solid var(--color-golden);
`;
