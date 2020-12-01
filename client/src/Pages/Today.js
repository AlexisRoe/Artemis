import React from "react";
import { AuthStateContext } from "../utils/contextApi/contextAPI";
import { useHistory } from "react-router-dom";

function Today() {
  const [user] = React.useContext(AuthStateContext);
  const history = useHistory();

  console.log(user);

  if (!user.auth_token || user.auth_token === "") {
    history.push("/");
    return null;
  }

  return "Nothing to see yet";
}

export default Today;
