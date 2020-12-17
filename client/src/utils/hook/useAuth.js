// TODO: INTEGRATING WITH SERVERSIDE REFRESH JWT TOKEN
import { hash } from "../helpers/";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function useAuth() {
  const history = useHistory();
  const [formState, setFormState] = useState(false);
  const [credentials, setCredentials] = useState({ id: null, password: null });
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("loading ...");

  const changeUserCredentials = (key) => (value) => {
    setCredentials({ ...credentials, [key]: value });
  };
  const handleOnChangeID = changeUserCredentials("id");
  const handleOnChangePassword = changeUserCredentials("password");

  const errorHandler = (response) => {
    console.error(response.message);
    setIsError(true);
    switch (response.code) {
      case 401:
        setMessage(response.desc);
        setFormState(true);
        break;
      case 404:
        setMessage(response.message);
        setFormState(true);
        break;
      default:
        setMessage(response.message);
        setFormState(false);
    }
    setTimeout(() => {
      setLoading(false);
      setIsError(false);
      setLoading(false);
      setMessage("loading ...");
      setCredentials({ ...credentials, id: null, password: null });
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
      switch (response.code) {
        case 200:
          setFormState(false);
          setLoading(false);
          history.push("/");
          break;
        default:
          errorHandler(response);
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
    handleOnChangeID,
    handleOnChangePassword,
  };
}
