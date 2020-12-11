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
  visibility: ${(props) => (props.visibility ? "default" : "hidden")};
`;

export default function NotificationHeader({
  error = false,
  message = "loading ...",
  visibility = false,
}) {
  return (
    <Aside state={error} visibility={visibility}>
      <span>{message}</span>
    </Aside>
  );
}

NotificationHeader.propTypes = {
  error: PropTypes.bool,
  message: PropTypes.string,
  visibility: PropTypes.bool,
};
