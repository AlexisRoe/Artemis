import { useAuth_Token } from "../context/Context";

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
