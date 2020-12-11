import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

export const GlobalContext = React.createContext(null);

export const GlobalContextProvider = ({ children }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({ name: null });
  const [titleHeader, setTitleHeader] = useState(null);
  const [isAuthorizated, setIsAuthorizated] = useState(
    () => Cookies.get("auth_token") || null
  );

  function toggleLogin(status, data) {
    if (status) {
      setIsAuthorizated(Cookies.get("auth_token"));
      setUser(data);
    } else {
      setIsAuthorizated(null);
      setUser(null);
    }
  }

  function toggleErrorStatus() {
    setError(!error);
  }

  function changeNotificationMessage(message) {
    setNotificationMessage(message);
  }

  function readNoficationMessage() {
    return notificationMessage;
  }

  function toggleNotification() {
    setShowNotification(!showNotification);
  }

  function changeHeaderTitle(title) {
    setTitleHeader(title);
  }

  return (
    <GlobalContext
      value={
        (showNotification,
        notificationMessage,
        isAuthorizated,
        user,
        titleHeader,
        toggleLogin,
        toggleErrorStatus,
        readNoficationMessage,
        changeNotificationMessage,
        toggleNotification,
        changeHeaderTitle)
      }
    >
      {children}
    </GlobalContext>
  );
};

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useGlobalContext = () => useContext(GlobalContext);
export const useLogin = (status, data) =>
  useGlobalContext.toggleLogin(status, data);
export const useError = useGlobalContext.toggleErrorStatus;
export const useNotification = useGlobalContext.readNoficationMessage;
export const useChangeNotification = useGlobalContext.changeNotificationMessage;
export const useShowNotification = useGlobalContext.toggleNotification;
export const useHeaderTitle = (title) =>
  useGlobalContext.changeHeaderTitle(title);
