import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Aside = styled.aside`
  width: 100%;
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
