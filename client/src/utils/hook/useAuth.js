import Cookies from "js-cookie";
import { hash } from "../helpers/";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { COOKIE_NAME } from "../config/constants";
import {
  hideNotification,
  displayNotification,
  handleErrorNotification,
} from "../context";

export default function useAuth() {
  const history = useHistory();
  const [formState, setFormState] = useState(false);
  const [user, setUser] = useState({ id: null, password: null });

  const changeUserCredentials = (key) => (value) => {
    setUser({ ...user, [key]: value });
  };
  const handleID = changeUserCredentials("id");
  const handlePassword = changeUserCredentials("password");

  const handleFormState = (message) => {
    handleErrorNotification(message);
    setFormState(!formState);
  };

  const signOut = () => {
    Cookies.delete(COOKIE_NAME);
    history.push(`/login`);
  };

  const signIn = async () => {
    try {
      displayNotification();
      const hashedPassword = hash(user.password);
      const credentialsBase64 = window.btoa(`${user.id}:${hashedPassword}`);
      const options = {
        method: "GET",
        credentials: "include",
        headers: {
          authorization: `Basic ${credentialsBase64}`,
        },
      };
      const response = await fetch(`/api/user/login`, options);
      switch (response.code) {
        case 200:
          hideNotification();
          history.push("/");
          break;
        default:
          handleFormState(response.message);
      }
    } catch (error) {
      handleFormState(error.message);
    }
  };

  return { user, formState, signIn, signOut, handleID, handlePassword };
}
