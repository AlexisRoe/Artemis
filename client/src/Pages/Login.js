import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { hash } from "../utils/crypto/crypto";
import { loginUser } from "../utils/login/loginValidation";
import {
  LoginButton,
  LoginInput,
  Logo,
  LoginForm,
  LoginContainer,
  ProgressNotification,
} from "../components/Login";
import { AuthStateContext } from "../utils/contextApi/contextAPI";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("none");
  const [user, dispatch] = useContext(AuthStateContext);
  const history = useHistory();

  const onSubmit = async (event) => {
    event.preventDefault();
    if (user.loading) {
      setMessage("loading");
    }
    try {
      const hashedPassword = hash(password);
      const response = await loginUser(dispatch, { id, hashedPassword });
      if (response) {
        history.push("/day");
      } else {
        setMessage("error");
      }
    } catch (error) {
      console.log(error);
      setMessage(user.errorMessage);
    }
  };

  return (
    <LoginContainer>
      <Logo />
      <LoginForm onSubmit={onSubmit}>
        <ProgressNotification state={message} />
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
