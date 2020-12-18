// TODO: INTEGRATING WITH SERVERSIDE REFRESH JWT TOKEN
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function useAuth() {
  const history = useHistory();
  const [formState, setFormState] = useState(false);
  const [credentials, setCredentials] = useState({ id: "", password: "" });
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("loading ...");

  const changeUserCredentials = (key) => (value) => {
    setCredentials({ ...credentials, [key]: value });
  };
  const handleID = changeUserCredentials("id");
  const handlePassword = changeUserCredentials("password");
  const resetCredentials = () => {
    handleID("");
    handlePassword("");
  };

  const errorHandler = (data) => {
    console.error(data.message);
    setIsError(true);
    switch (data.code) {
      case 401:
        setMessage(data.desc);
        setFormState(true);
        break;
      case 404:
        setMessage(data.message);
        setFormState(true);
        break;
      default:
        setMessage(data.message);
        setFormState(false);
    }
    setTimeout(() => {
      setLoading(false);
      setIsError(false);
      setLoading(false);
      setMessage("loading ...");
      resetCredentials();
    }, 6000);
  };

  // TODO: remove credentials, to avoid javascript access to cookie
  const options = {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({
      id: credentials.id,
      password: credentials.password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const signIn = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/user/login`, options);
      const data = await response.json();
      switch (data.code) {
        case 200:
          history.push("/");
          break;
        default:
          errorHandler(data);
      }
    } catch (error) {
      errorHandler({ message: error.message });
    }
  };

  return {
    loading,
    message,
    isError,
    formState,
    signIn,
    credentials,
    handleID,
    handlePassword,
  };
}
