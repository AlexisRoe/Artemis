// import React, { useState, useContext } from "react";
import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import { hash } from "../utils/crypto/crypto";
// import { loginUser } from "../utils/login/loginValidation";
import {
  LoginButton,
  LoginInput,
  Logo,
  LoginForm,
  LoginContainer,
  // ProgressNotification,
} from "../components/Login";
// import { AuthStateContext } from "../utils/contextApi/contextAPI";
import { login } from "../utils/api/userAuthentication";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  // const [notification, setNotification] = useState({ status: "none" });
  // const [user, dispatch] = useContext(AuthStateContext);
  // const history = useHistory();

  const onSubmit = async (event) => {
    event.preventDefault();
    // if (user.loading) {
    //   setNotification({
    //     ...notification,
    //     status: "loading",
    //     message: "loading ...",
    //   });
    // }
    try {
      const response = await login(id, password);
      // TODO: set user to globalContext
      // user: {
      //   personalnr: result.personalnr,
      //   email: result.email,
      //   name: result.name,
      // }
      // TODO: delete console.log
      console.log(response);
      // history.push("/day");
    } catch (error) {
      // TODO: set error.message in globalContext
      // TODO: show notifification area
      // TODO: change state of form
      // TODO: delete console.log
      console.log(error.message);
    }
  };

  return (
    <LoginContainer>
      <Logo />
      <LoginForm onSubmit={onSubmit}>
        {/* <ProgressNotification state={notification} /> */}
        <LoginInput
          type="text"
          value={id}
          title="Mitarbeiter-ID"
          onChange={(event) => setId(event.target.value)}
        />
        <LoginInput
          type="password"
          value={password}
          title="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <LoginButton type="submit">Login</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;
