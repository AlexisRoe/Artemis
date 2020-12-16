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
