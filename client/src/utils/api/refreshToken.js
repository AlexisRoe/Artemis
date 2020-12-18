export default async function refreshToken() {
  try {
    const response = await fetch(`/api/user/refresh`);
    if (response.ok) {
      const data = await response.json();
      return data.user;
    }
    return false;
  } catch (error) {
    throw new Error(error.message);
  }
}
