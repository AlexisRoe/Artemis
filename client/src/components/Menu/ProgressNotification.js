import styled from "styled-components/macro";
import PropTypes from "prop-types";

const ProgressArea = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transform: translateY(-1rem);
  display: ${(props) => (props.state === "none" ? "none" : "grid")};
  place-items: center;
  height: 2rem;
  width: 100%;
  color: ${(props) =>
    props.state === "error"
      ? "var(--color-font-white)"
      : props.state === "loading"
      ? "var(--font-body-copy)"
      : "var(--font-body-copy)"};
  font-size: 0.8rem;
  background-color: ${(props) =>
    props.state === "error"
      ? "var( --color-alarm)"
      : props.state === "loading"
      ? "var(--color-bg-sub)"
      : "var(--color-bg-white)"};
`;

export const ProgressNotification = ({ state }) => {
  const { status, message } = state;
  return (
    <ProgressArea state={status}>
      <span>{message}</span>
    </ProgressArea>
  );
};

ProgressNotification.propTypes = {
  state: PropTypes.string.isRequired,
};
