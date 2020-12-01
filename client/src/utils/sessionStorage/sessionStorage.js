export function getUser(USER) {
  const storedUser = JSON.parse(sessionStorage.getItem(USER)) || {};

  const initialState = {
    user: "" || storedUser.user,
    auth_token: "" || storedUser.auth_token,
    loading: false,
    errorMessage: null,
  };

  return initialState;
}

export function setUser(USER, payload) {
  const newContent = JSON.stringify(payload);
  sessionStorage.setItem(USER, newContent);
}

export function removeUser(USER) {
  sessionStorage.removeItem(USER);
}
