import { Redirect, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { COOKIE_NAME } from "../config/constants";

export default function ProtectedRoute(props, children) {
  const isAuthorizated = Cookies.get(COOKIE_NAME) || null;

  return isAuthorizated ? (
    <Route {...props}>{children}</Route>
  ) : (
    <Redirect to="/login" />
  );
}
