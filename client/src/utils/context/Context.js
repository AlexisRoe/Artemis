import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { mockTimestamp } from "../helpers";
import { useHistory } from "react-router-dom";
import { deleteCookieHeader } from "../api/userAuthentication";

export const Context = React.createContext(null);

const defaultUser = {
  user: {
    _id: null,
    name: null,
    auth_token: null,
  },
  realDate: new Intl.DateTimeFormat("de-DE", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(new Date()),
  mockedDate: mockTimestamp(),
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
export const useAuth_Token = () => {
  const { user } = useUserContext();
  return user.auth_token;
};

export const useLoginUser = (newUser) => {
  const { user, setUser } = useUserContext();
  setUser({ ...user, ...newUser });
};

export const useLogoutUser = async () => {
  const { user, setUser } = useUserContext();
  const history = useHistory();
  try {
    deleteCookieHeader(user.auth_token);
    setUser({ ...user, ...defaultUser });
    history.push("/login");
  } catch (error) {
    throw new Error(error.message);
  }
};
