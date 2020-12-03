import userAuthentication from "../api/userAuthentication";
import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  REQUEST_LOGIN,
  USER,
} from "../config/constants";
import { setUser } from "../sessionStorage/sessionStorage";

export async function loginUser(dispatch, payload) {
  try {
    dispatch({ type: REQUEST_LOGIN });
    const data = await userAuthentication(payload);
    if (data.user) {
      dispatch({ type: LOGIN_SUCCESS, payload: data });
      setUser(USER, data);
      return true;
    }
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, error: error });
  }
}
