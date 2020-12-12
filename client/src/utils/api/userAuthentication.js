import { errorHandlerLogin } from "./errorHandler";
const CryptoJS = require("crypto-js");

export async function login(id, password) {
  const hashedPassword = CryptoJS.MD5(password).toString(CryptoJS.enc.Base64);
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
      errorHandlerLogin(response.json());
      return null;
    }
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}
