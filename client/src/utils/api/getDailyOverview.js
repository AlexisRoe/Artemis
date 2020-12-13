export async function getDailyData(timestamp) {
  try {
    const response = await fetch(`/api/date/${timestamp}`);
    if (response.ok) {
      const data = response.json();
      return { code: 200, content: data };
    }
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}
