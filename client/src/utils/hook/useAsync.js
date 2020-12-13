import { useState, useEffect } from "react";
import { errorHandler } from "./useErrorHandler";
import {
  hideNotification,
  displayNotification,
  handleErrorNotification,
} from "../context/";

export default function useFetch(action, params) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const doFetch = async () => {
      try {
        displayNotification();
        const response = await action(params);
        switch (response.code) {
          case 200:
            setData(response.content);
            hideNotification();
            break;
          case 401:
          case 400:
          case 404:
          case 500:
          default:
            errorHandler(response);
        }
      } catch (error) {
        handleErrorNotification(error.message);
      }
    };
    doFetch();
  }, [action, params]);

  return { data };
}
