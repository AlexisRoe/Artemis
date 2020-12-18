import { useUserContext } from "../context/Context";

const fetchData = (route) => async (id) => {
  const { user } = useUserContext();
  try {
    const response = await fetch(`/api/${route}/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${user.auth_token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const daily = fetchData("date");
export const event = fetchData("event");
