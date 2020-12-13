import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { ANIMATION_SLIDE_IN, ANIMATION_SLIDE_OUT } from "../config/constants";

export const GlobalContext = React.createContext(null);

export const GlobalContextProvider = ({ children }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [headerTitle, setHeaderTitle] = useState("Artemis");
  const [header, setHeader] = useState({
    title: "Artemis",
    date: new Intl.DateTimeFormat("de-DE", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }).format(new Date()),
  });
  const [notification, setNotification] = useState({
    visibility: false,
    isError: false,
    animation: ANIMATION_SLIDE_IN,
    message: "loading ...",
  });

  function changeHeaderTitle(title) {
    setHeaderTitle(title);
  }

  function displayNotification() {
    setShowNotification(true);
  }

  function hideNotification() {
    setShowNotification(false);
  }

  return (
    <GlobalContext.Provider
      value={{
        showNotification,
        notification,
        header,
        headerTitle,
        setHeader,
        setNotification,
        changeHeaderTitle,
        displayNotification,
        hideNotification,
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

const changeHeader = (key) => (value) => {
  const { setHeader } = useGlobalContext.setHeader;
  setHeader({ [key]: value });
};

export const setTitle = changeHeader("title");
export const setDate = changeHeader("date");

export function handleErrorNotification(message) {
  const notification = useGlobalContext.notification;
  const setNotification = useGlobalContext.setNotification;
  setNotification({
    ...notification,
    isError: true,
    message,
    visibility: true,
    animation: ANIMATION_SLIDE_IN,
  });
  setTimeout(() => {
    setNotification({ ...notification, animation: ANIMATION_SLIDE_OUT });
  }, 60000);
  setTimeout(() => {
    setNotification({ ...notification, visibility: false, isError: false });
  }, 2000);
}

export const displayNotification = () => {
  const notification = useGlobalContext.notification;
  const setNotification = useGlobalContext.setNotification;
  setNotification({
    ...notification,
    visibility: true,
    animation: ANIMATION_SLIDE_IN,
    message: "loading ...",
  });
};

export const hideNotification = () => {
  const notification = useGlobalContext.notification;
  const setNotification = useGlobalContext.setNotification;
  setNotification({ ...notification, animation: ANIMATION_SLIDE_OUT });
  setTimeout(() => {
    setNotification({ ...notification, visibility: false, isError: false });
  }, 2000);
};
