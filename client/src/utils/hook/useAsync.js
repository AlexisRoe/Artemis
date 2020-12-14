import { useState, useCallback } from "react";
import { handleErrorNotification } from "../context/";
import { STANDARD_500, STANDARD_404 } from "../config/constants";
import { useHistory } from "react-router-dom";
import useAuth from "./useAuth";

export default function useFetch(action, params) {
  const [data, setData] = useState(null);
  const history = useHistory();
  const { signOut } = useAuth();

  const doFetch = useCallback(async () => {
    const errorHandler = (response) => {
      switch (response.code) {
        case 401:
          signOut();
          handleErrorNotification(response.message);
          break;
        case 400:
          handleErrorNotification(response.message);
          history.push(`/404?code=400&message=${STANDARD_500}`);
          break;
        case 404:
          handleErrorNotification(response.message);
          history.push(`/404?code=404&message=${STANDARD_404}`);
          break;
        case 500:
          handleErrorNotification(response.message);
          history.push(`/404?code=500&message=${STANDARD_500}`);
          break;
        default:
          console.error(response.message);
      }
    };

    try {
      const response = await action(params);
      switch (response.code) {
        case 200:
          setData(response.content);
          break;
        case 401:
        case 400:
        case 404:
        case 500:
        default:
          console.error(response.message);
          errorHandler(response.message);
      }
    } catch (error) {
      console.error(error.message);
      handleErrorNotification(error.message);
    }
  }, [action, params, history]);

  return { data, doFetch };
}
