import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../context/Context";

export default function useAuth() {
  const history = useHistory();
  const { logoutUser, loginUser } = useUserContext();
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

  const resetCredentials = useCallback(() => {
    handleID("");
    handlePassword("");
  }, [handleID, handlePassword]);

  const errorHandler = useCallback(
    (data) => {
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
    },
    [resetCredentials]
  );

  // TODO: remove credentials, to avoid javascript access to cookie

  const signIn = useCallback(async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        id: credentials.id,
        password: credentials.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      setLoading(true);
      const response = await fetch(`/api/user/login`, options);
      const data = await response.json();
      switch (data.code) {
        case 200:
          loginUser(data.user);
          history.push("/");
          break;
        default:
          errorHandler(data);
      }
    } catch (error) {
      errorHandler({ message: error.message });
    }
  }, [errorHandler, history, credentials.id, credentials.password, loginUser]);

  const signOut = useCallback(async () => {
    try {
      await fetch("/api/user/logout", {
        method: "DELETE",
      });
      logoutUser();
      history.push("/login");
    } catch (error) {
      console.error(error.message);
    }
  }, [history, logoutUser]);

  return {
    loading,
    message,
    isError,
    formState,
    signIn,
    signOut,
    credentials,
    handleID,
    handlePassword,
  };
}
