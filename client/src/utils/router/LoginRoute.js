import { Redirect, Route } from "react-router-dom";
import { useUserContext } from "../context/Context";

export default function LoginRoute(props) {
  const { user } = useUserContext();

  if (user?.auth_token) {
    return <Redirect to="/" />;
  } else {
    return <Route {...props} />;
  }
}
