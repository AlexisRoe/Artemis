export async function eventData(id) {
  try {
    const response = await fetch(`/api/event/${id}`);
    if (!response.ok) {
      // TODO: error handling
      // type 500 -> technical error
      // type 404 -> no data for the event found
      // type 401 --> authentication error --> login page
      // type 400 -> invalid data
      console.log(response.json().message);
    }
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}
