import { signOut } from "./useAuth";
import { useGlobalContext } from "../context";
import { useHistory } from "react-router-dom";
import { STANDARD_500, STANDARD_404 } from "../config/constants";

export default function useError() {
  const { handleNotification } = useGlobalContext();
  const history = useHistory();

  function errorHandler(response) {
    switch (response.code) {
      case 401:
        signOut();
        handleNotification(response.message);
        break;
      case 400:
        handleNotification(response.message);
        history.push(`/404?code=400&message=${STANDARD_500}`);
        break;
      case 404:
        handleNotification(response.message);
        history.push(`/404?code=404&message=${STANDARD_404}`);
        break;
      case 500:
        handleNotification(response.message);
        history.push(`/404?code=500&message=${STANDARD_500}`);
        break;
      default:
        console.error(response.message);
    }
  }

  return { errorHandler };
}
