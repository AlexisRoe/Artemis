const fetchData = (route) => async (id, token) => {
  try {
    const response = await fetch(`/api/documents/${route}/${id}`, {
      method: "GET",
      headers: {
        authorization: token,
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
