export async function getDailyData(timestamp) {
  try {
    const response = await fetch(`/api/date/${timestamp}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

const fetchData = (route) => async (id) => {
  try {
    const response = await fetch(`/api/${route}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const daily = fetchData("date");
export const event = fetchData("event");
