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
      // TODO: error handling
      // type 500 -> technical error
      // type 404 -> user didnt exist
      // type 401 -> wrong authentication
      console.log(response.json().message);
    }
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}
