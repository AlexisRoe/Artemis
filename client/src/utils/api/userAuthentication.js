export default async function userAuthentication({ id, hashedPassword }) {
  const response = await fetch(`/api/user?user=${id}&pwd=${hashedPassword}`);
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  return await response.json();
}
