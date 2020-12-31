import { useState, useCallback } from "react";
import { useUserContext } from "../context/Context";
import useAuth from "./useAuth";

export default function useAsync(action, params) {
  const [data, setData] = useState(null);
  const [metaData, setMetaData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("loading ...");
  const { user } = useUserContext();
  const { signOut } = useAuth();

  const doFetch = useCallback(async () => {
    const errorHandler = (response) => {
      console.error(response.message);
      setIsError(true);
      !response.message
        ? setMessage("unknown Error")
        : setMessage(response.message);
      setTimeout(() => {
        setLoading(false);
      }, 6000);
    };

    try {
      setLoading(true);
      const response = await action(params, user.auth_token);
      switch (response.code) {
        case 200:
          setData(response.content);
          setMetaData({ title: response.title, date: response.date });
          setLoading(false);
          break;
        case 401:
          signOut();
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
  }, [user.auth_token, action, params, signOut]);

  return { data, loading, isError, message, metaData, doFetch };
}
