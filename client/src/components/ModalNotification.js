import styled from "styled-components/macro";
import PropTypes from "prop-types";

/* 
Input in Modal

const information = [
    {
        titel: "string",
        content: "string",
        link: "ObjectID",
        section: "string"
    }
]
*/

const Modal = styled.aside`
  width: 100%;
  min-width: 375px;
  background-color: var(--color-bg-dark);
  padding: 10%;
  color: var(--color-font-white);
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  ::after {
    position: absolute;
    content: "";
    bottom: 0.5rem;
    width: 80%;
    left: 10%;
    border-style: double solid;
    border-color: var(--color-golden-dark);
    border-bottom-width: 1px;
  }
`;

const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  margin-top: 0.5rem;
  cursor: pointer;

  :hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const NotificationTitel = styled.h4`
  margin: 0 0 0.1rem 0;
`;

export const ModalNotification = ({ informations }) => {
  return (
    <Modal>
      {informations.map((information) => {
        return (
          <NotificationContainer key={information.titel}>
            <NotificationTitel>{information.titel}</NotificationTitel>
            <span>{information.content}</span>
          </NotificationContainer>
        );
      })}
    </Modal>
  );
};

ModalNotification.propTypes = {
  informations: PropTypes.arrayOf(PropTypes.object),
};
