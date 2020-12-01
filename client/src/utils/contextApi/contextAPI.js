import React, { useReducer } from "react";
import { AuthReducer } from "./reducer";
import { USER } from "../config/constants";
import { getUser } from "../sessionStorage/sessionStorage";
import PropTypes from "prop-types";

export const AuthStateContext = React.createContext();
export const AuthDispatchContext = React.createContext();

export const AuthProvider = async ({ children }) => {
  const initialState = await getUser(USER);
  const [user, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
