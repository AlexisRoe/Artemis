// UNTESTED PROTOTYP
// TODO: testing
// TODO: INTEGRATING WITH SERVERSIDE REFRESH JWT TOKEN
// 15.12.2020
import Cookies from "js-cookie";
import { COOKIE_NAME } from "../config/constants";
import { hash } from "../helpers/";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  hideNotification,
  displayNotification,
  handleErrorNotification,
} from "../context";

export default function useAuth() {
  const history = useHistory();
  const [formState, setFormState] = useState(false);
  const [credentials, setCredentials] = useState({ id: null, password: null });

  const changeUserCredentials = (key) => (value) => {
    setCredentials({ ...credentials, [key]: value });
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
      const hashedPassword = hash(credentials.password);
      const credentialsBase64 = window.btoa(
        `${credentials.id}:${hashedPassword}`
      );
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

  return { credentials, formState, signIn, signOut, handleID, handlePassword };
}
