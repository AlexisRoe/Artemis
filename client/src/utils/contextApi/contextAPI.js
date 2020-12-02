import React, { useReducer } from "react";
import { AuthReducer } from "./reducer";
import { USER } from "../config/constants";
import { getUser } from "../sessionStorage/sessionStorage";
import PropTypes from "prop-types";

export const AuthStateContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const initialState = getUser(USER);
  const [user, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthStateContext.Provider value={[user, dispatch]}>
      {children}
    </AuthStateContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
