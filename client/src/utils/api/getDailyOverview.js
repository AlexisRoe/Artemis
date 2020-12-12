import { errorHandlerData } from "./errorHandler";

export async function getDailyData(timestamp) {
  try {
    const response = await fetch(`/api/date/${timestamp}`);
    if (!response.ok) {
      errorHandlerData(response.json());
      return null;
    }
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}
