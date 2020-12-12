export async function dailyData(timestamp) {
  try {
    const response = await fetch(`/api/date/${timestamp}`);
    if (!response.ok) {
      // TODO: error handling
      // type 500 -> technical error
      // type 404 -> no data for the day found
      // type 401 --> authentication error --> login page
      // type 400 -> invalid data
      console.log(response.json().message);
    }
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}
