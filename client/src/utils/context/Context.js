import React, { useCallback, useContext, useState } from "react";
import PropTypes from "prop-types";
import { mockTimestamp } from "../helpers";

export const Context = React.createContext(null);

const defaultUser = {
  id: null,
  name: null,
  auth_token: null,
  realDate: new Intl.DateTimeFormat("de-DE", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(new Date()),
  mockedDate: mockTimestamp(),
};

export const UserData = ({ children }) => {
  const [user, setUser] = useState(defaultUser);

  const logoutUser = () => setUser(defaultUser);

  const loginUser = useCallback(
    (newUser) => {
      setUser({ ...user, ...newUser });
    },
    [user]
  );

  return (
    <Context.Provider value={{ user, logoutUser, loginUser }}>
      {children}
    </Context.Provider>
  );
};

UserData.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useUserContext = () => useContext(Context);

export const useAuth_Token = () => {
  const { user } = useUserContext();
  return user.auth_token;
};
