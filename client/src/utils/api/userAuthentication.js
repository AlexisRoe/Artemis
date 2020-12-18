import { useAuth_Token } from "../context/Context";
import { hash } from "../helpers/";

export async function login(id, password) {
  const hashedPassword = hash(password);
  const credentialsBase64 = window.btoa(`${id}:${hashedPassword}`);
  const options = {
    method: "GET",
    credentials: "include",
    headers: {
      authorization: `Basic ${credentialsBase64}`,
    },
  };
  try {
    const response = await fetch(`/api/user/login`, options);
    if (!response.ok) {
      console.error(response.json().message);
      return null;
    }
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteCookieHeader(auth_token) {
  const options = {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${auth_token}`,
    },
  };
  try {
    const response = await fetch("/api/user/logout", options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}
