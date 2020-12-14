import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { LoginButton, LoginInput, LoginForm } from "../components/Login";
import { login } from "../utils/api/userAuthentication";
import { useGlobalContext } from "../utils/context";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { changeHeaderTitle } = useGlobalContext();
  const history = useHistory();

  useEffect(() => {
    changeHeaderTitle("Login");
  }, [changeHeaderTitle]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(id, password);
      setPassword("");
      setId("");
      history.push("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
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
  );
}

export default Login;
