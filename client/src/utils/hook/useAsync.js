import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "../context";

export default function useFetch(action, params) {
  const [data, setData] = useState(null);
  const history = useHistory();
  const { hideNotification, displayNotification } = useGlobalContext();

  useEffect(() => {
    const doFetch = async () => {
      function handleError(message, code) {
        // handleErrorNotification(message);
        history.push(`/${code}?code=${code}"`);
      }

      displayNotification();
      try {
        const response = await action(params);
        switch (response.code) {
          case 200:
            setData(response.content);
            hideNotification();
            break;
          case 400:
            handleError(response.message, 400);
            break;
          case 401:
            handleError(response.message, 401);
            break;
          case 404:
            handleError(response.message, 404);
            break;
          case 500:
            handleError(response.message, 500);
            break;
          default:
            hideNotification();
            console.log({ response, message: "an error accured" });
        }
      } catch (error) {
        handleError(error.message, 500);
      }
    };
    doFetch();
  }, [action, params, displayNotification, hideNotification, history]);

  return { data };
}
