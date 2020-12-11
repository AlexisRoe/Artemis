import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

export const GlobalContext = React.createContext(null);
const COOKIE_NAME = "auth_token";

export const GlobalContextProvider = ({ children }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [errorState, serErrorState] = useState(false);
  const [user, setUser] = useState(null);
  const [headerTitle, setHeaderTitle] = useState("Artemis");
  const [isAuthorizated, setIsAuthorizated] = useState(
    () => Cookies.get(COOKIE_NAME) || null
  );

  function toggleLogin(status, data) {
    if (status) {
      setIsAuthorizated(Cookies.get(COOKIE_NAME));
      setUser(data);
    } else {
      Cookies.remove(COOKIE_NAME);
      setIsAuthorizated(null);
      setUser(null);
    }
  }

  function toggleNotification(message, isError) {
    setNotificationMessage(message);
    if (isError) serErrorState(true);
    setShowNotification(!showNotification);
    setTimeout(() => {
      setShowNotification(!showNotification);
      setNotificationMessage(null);
      if (isError) serErrorState(false);
    }, 2000);
  }

  function changeHeaderTitle(title) {
    setHeaderTitle(title);
  }

  return (
    <GlobalContext
      value={
        (showNotification,
        notificationMessage,
        errorState,
        isAuthorizated,
        user,
        headerTitle,
        toggleLogin,
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
export const useHeaderTitle = (title) =>
  useGlobalContext.changeHeaderTitle(title);
export const useShowNotification = (message, isError) =>
  useGlobalContext.toggleNotification(message, isError);
