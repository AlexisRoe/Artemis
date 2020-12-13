export async function getEventData(id) {
  try {
    const response = await fetch(`/api/event/${id}`);
    if (response.ok) {
      const data = response.json();
      return { code: 200, content: data };
    }
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}
