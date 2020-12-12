import { errorHandlerData } from "./errorHandler";

export async function getDailyData(timestamp) {
  try {
    const response = await fetch(`/api/date/${timestamp}`);
    if (!response.ok) {
      errorHandlerData(await response.json());
      return null;
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}
