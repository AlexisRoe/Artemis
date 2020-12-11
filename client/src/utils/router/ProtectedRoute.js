import { Redirect, Route } from "react-router-dom";
import { COOKIE_NAME } from "../config/constants";
import Cookies from "js-cookie";

export default function ProtectedRoute(props, children) {
  // const isAuthorizated = Cookies.get(COOKIE_NAME) || null;
  const isAuthorizated = Cookies.get(COOKIE_NAME);

  if (isAuthorizated) {
    return <Route {...props}>{children}</Route>;
  } else {
    return <Redirect to="/login" />;
  }
}
