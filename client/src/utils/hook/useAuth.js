// TODO: INTEGRATING WITH SERVERSIDE REFRESH JWT TOKEN
import { hash } from "../helpers/";
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

  const createHeader = () => {
    const hashedPassword = hash(credentials.password);
    // TODO: Change to include id, passwort in the body
    // TODO: Exit hashing passwords
    const credentialsBase64 = window.btoa(
      `${credentials.id}:${hashedPassword}`
    );
    // TODO: remove credentials, to avoid javascript access to cookie
    const options = {
      method: "GET",
      credentials: "include",
      headers: {
        authorization: `Basic ${credentialsBase64}`,
      },
    };
    return options;
  };

  const signIn = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/user/login`, createHeader());
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
