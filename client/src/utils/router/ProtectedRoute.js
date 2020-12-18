import { Redirect, Route } from "react-router-dom";
import { useUserContext } from "../context/Context";

export default function ProtectedRoute(props) {
  const { user } = useUserContext();

  if (user.auth_token) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
}
