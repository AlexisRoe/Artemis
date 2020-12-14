import React, { useState, useContext, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { ANIMATION_SLIDE_IN, ANIMATION_SLIDE_OUT } from "../config/constants";

export const GlobalContext = React.createContext(null);

const defaultHeader = {
  title: "Artemis",
  date: new Intl.DateTimeFormat("de-DE", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(new Date()),
};

const defaultNotification = {
  visibility: false,
  isError: false,
  animation: ANIMATION_SLIDE_IN,
  message: "loading ...",
};

export const GlobalContextProvider = ({ children }) => {
  const [header, setHeader] = useState(defaultHeader);
  const [notification, setNotification] = useState(defaultNotification);

  const changeHeader = (key) => (value) => {
    console.log({ key, value });
    setHeader({ ...header, [key]: value });
  };
  const setTitle = useCallback(() => changeHeader("title"), []);
  const setDate = useCallback(() => changeHeader("date"), []);

  return (
    <GlobalContext.Provider
      value={{
        header,
        setTitle,
        setDate,
        notification,
        setNotification,
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

// TODO: Build Notification system
const notification = useGlobalContext.notification;
const setNotification = () => useGlobalContext.setNotification;

export function handleErrorNotification(message) {
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
