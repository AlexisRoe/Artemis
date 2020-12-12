import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";
import { COOKIE_NAME } from "../config/constants";

export const GlobalContext = React.createContext(null);

export const GlobalContextProvider = ({ children }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("loading ...");
  const [errorState, setErrorState] = useState(false);
  const [user, setUser] = useState(null);
  const [headerTitle, setHeaderTitle] = useState("Artemis");
  const [auth_token, setAuth_Token] = useState(
    () => Cookies.get(COOKIE_NAME) || null
  );

  function toggleLogin(status, data) {
    if (status) {
      setAuth_Token(Cookies.get(COOKIE_NAME));
      setUser(data);
    } else {
      Cookies.remove(COOKIE_NAME);
      setAuth_Token(null);
      setUser(null);
    }
  }

  function toggleNotification(message, isError) {
    setNotificationMessage(message);
    if (isError) setErrorState(isError);
    setShowNotification(!showNotification);
    setTimeout(() => {
      setShowNotification(false);
      setNotificationMessage(null);
      if (isError) setErrorState(false);
    }, 2000);
  }

  function toogleLoading() {
    setShowNotification(!showNotification);
  }

  function changeHeaderTitle(title) {
    setHeaderTitle(title);
  }

  return (
    <GlobalContext.Provider
      value={{
        showNotification,
        notificationMessage,
        errorState,
        auth_token,
        user,
        headerTitle,
        toggleLogin,
        toogleLoading,
        toggleNotification,
        changeHeaderTitle,
      }}
    >
      {children}
    </GlobalContext.Provider>
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
