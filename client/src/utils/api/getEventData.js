import { errorHandlerData } from "./errorHandler";

export async function eventData(id) {
  try {
    const response = await fetch(`/api/event/${id}`);
    if (!response.ok) {
      errorHandlerData(response.json());
      return null;
    }
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}
