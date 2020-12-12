import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  LoginButton,
  LoginInput,
  LoginForm,
  LoginContainer,
} from "../components/Login";
import { login } from "../utils/api/userAuthentication";
import { useGlobalContext } from "../utils/context";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const {
    toggleLogin,
    toggleNotification,
    changeHeaderTitle,
  } = useGlobalContext();
  const history = useHistory();

  useEffect(() => {
    changeHeaderTitle("Login");
  }, [changeHeaderTitle]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    toggleNotification("loading", false);
    try {
      const response = await login(id, password);
      toggleLogin(true, response);
      setPassword("");
      setId("");
      history.push("/");
    } catch (error) {
      toggleNotification("an error accured", true);
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
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
