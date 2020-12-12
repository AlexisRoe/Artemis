import { Redirect, Route } from "react-router-dom";
import { COOKIE_NAME } from "../config/constants";
import Cookies from "js-cookie";

export default function ProtectedRoute(props) {
  const isAuthorizated = Cookies.get(COOKIE_NAME) || null;

  if (isAuthorizated) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
}
