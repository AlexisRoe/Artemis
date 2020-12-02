import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  REQUEST_LOGIN,
  USER,
} from "../config/constants";
import { setUser } from "../sessionStorage/sessionStorage";

// Mockup for testing
const data = {
  auth_token:
    "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.5b0YUvXu9IFCI4kqzNAfrnuA2lSMp8XtezIZTfQYH4k",
  user: { id: 1, email: "test@test.de" },
  errors: ["Something goes wrong"],
};

export async function loginUser(dispatch, payload) {
  console.log(payload);

  try {
    dispatch({ type: REQUEST_LOGIN });
    if (data.user) {
      dispatch({ type: LOGIN_SUCCESS, payload: data });
      setUser(USER, data);
      return data;
    }
    dispatch({ type: LOGIN_ERROR, error: data.errors[0] });
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, error: error });
  }
}
