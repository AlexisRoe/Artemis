import React, { useCallback, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { mockTimestamp } from "../helpers";

export const Context = React.createContext(null);

const defaultUser = {
  id: null,
  name: null,
  auth_token: "",
};

const defaultDate = {
  realDate: new Intl.DateTimeFormat("de-DE", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(new Date()),
  mockedDate: mockTimestamp(),
};

export const UserData = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserCredentials = async () => {
      try {
        const response = await fetch(`/api/user/refresh`);
        if (response.ok) {
          const data = await response.json();
          setUser({ ...data.user, ...defaultDate });
        }
        if (!response.ok) {
          setUser({ ...defaultUser, ...defaultDate });
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    getUserCredentials();
  }, []);

  const logoutUser = () => setUser(defaultUser);

  const loginUser = useCallback((newUser) => {
    setUser({ ...defaultUser, ...newUser });
  }, []);

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
