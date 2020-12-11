import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

export const GlobalContext = React.createContext(null);

export const GlobalContextProvider = ({ children }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [user, setUser] = useState({ name: null });

  return (
    <GlobalContext value={(showNotification, notificationMessage, user)}>
      {children}
    </GlobalContext>
  );
};

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
