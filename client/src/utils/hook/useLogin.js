import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "../context";
import { login } from "../api/userAuthentication";

export default function useLogin() {
  const [formState, setFormState] = useState(false);
  const [user, setUser] = useState({ id: null, password: null });
  const history = useHistory();
  const { hideNotification, displayNotification } = useGlobalContext();

  const changeUserCredentials = (key) => (value) => {
    setUser({ ...user, [key]: value });
  };

  const handleID = changeUserCredentials("id");
  const handlePassword = changeUserCredentials("password");

  const handleFormState = (message) => {
    // handleErrorNotification(message);
    setFormState(!formState);
  };
  const doLogin = async () => {
    displayNotification();
    try {
      const response = await login(user.id, user.password);
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

  return { user, formState, doLogin, handleID, handlePassword };
}
