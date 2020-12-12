// import { useGlobalContext } from "../context";

export function errorHandlerData(serverResponse) {
  // const { hideNotification } = useGlobalContext();
  // hideNotification();
  console.error(serverResponse);

  // TODO: error handling
  // type 500 -> technical error --> rerouting
  // type 404 -> no data for the day found  --> rerouting
  // type 401 --> authentication error --> login page
  // type 400 -> invalid data /type 500 --> rerouting
  // rerouting to 404 page
  // showing error message in the notification area
}

export function errorHandlerLogin(serverResponse) {
  console.error(serverResponse);
  // TODO: error handling
  // type 500 -> technical error --> rerouting
  // type 404 -> user didnt exist
  // type 401 -> wrong authentication
}
