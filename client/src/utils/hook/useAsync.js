import Cookies from "js-cookie";
import { COOKIE_NAME } from "../config/constants";
import { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";

export default function useAsync(action, params) {
  const [data, setData] = useState(null);
  const [metaData, setMetaData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("loading ...");
  const history = useHistory();

  const doFetch = useCallback(async () => {
    const errorHandler = (response) => {
      console.error(response.message);
      setIsError(true);
      !response.message
        ? setMessage(response.message)
        : setMessage("unknown Error");
      setTimeout(() => {
        setLoading(false);
      }, 6000);
    };

    try {
      setLoading(true);
      const response = await action(params);
      switch (response.code) {
        case 200:
          setData(response.content);
          setMetaData({ title: response.title, date: response.date });
          setLoading(false);
          break;
        case 401:
          Cookies.delete(COOKIE_NAME);
          history.push(`/login`);
          break;
        case 400:
        case 404:
        case 500:
        default:
          errorHandler(response);
      }
    } catch (error) {
      errorHandler({ message: error.message });
    }
  }, [action, params, history]);

  return { data, loading, isError, message, metaData, doFetch };
}
