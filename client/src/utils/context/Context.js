import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { mockTimestamp } from "../helpers";

export const Context = React.createContext(null);

const defaultUser = {
  user: {
    _id: null,
    name: null,
    token: null,
  },
  defaultDate: new Intl.DateTimeFormat("de-DE", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(new Date()),
  mockDate: mockTimestamp(),
};

export const UserData = ({ children }) => {
  const [user, setUser] = useState(defaultUser);

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};

UserData.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useUserContext = () => useContext(Context);
