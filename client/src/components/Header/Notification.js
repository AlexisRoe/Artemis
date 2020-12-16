import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Aside = styled.aside`
  padding: 0.8rem;
  z-index: 10;
  color: var(--color-font-white);
  background-color: ${(props) =>
    props.state ? "var(--color-state-error)" : "var(--color-state-default)"};
  position: relative;
  display: grid;
  grid-template-columns: calc(2.4rem + 100px) 1fr;
  span {
    grid-column: 2/3;
  }
  animation: 10s ${(props) => (props.state ? "fadeInOut" : "none")} ease-in-out;
  animation-fill-mode: forward;
  opacity: ${(props) => (props.state ? "0" : "1")};

  @keyframes fadeInOut {
    0% {
      opacity: 1;
      transform: translateY(-100%);
    }
    10% {
      transform: translateY(0);
    }
    90% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
      opacity: 1;
    }
  }
`;

export default function NotificationHeader({
  error = false,
  message = "loading ...",
}) {
  return (
    <Aside state={error}>
      <span>{message}</span>
    </Aside>
  );
}

NotificationHeader.propTypes = {
  error: PropTypes.bool,
  message: PropTypes.string,
};
