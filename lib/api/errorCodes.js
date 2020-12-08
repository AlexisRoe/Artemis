const errorMessages = {
  login: {
    400: {
      id: { code: 400, message: "UserID is missing" },
      pwd: { code: 400, message: "password is missing" },
    },
    401: { code: 401, message: "password validation failed" },
    404: { code: 404, message: "User not found" },
  },
  authorization: {
    401: { code: 401, message: "invalid authorization token" },
  },
  timestamp: {
    400: { code: 400, message: "invalid timestamp submitted" },
    404: { code: 404, message: "no events found today" },
  },
  server: {
    code: 500,
    message: "an internal server error accured",
  },
};

const serverMessage500 = (desc) => {
  return { ...errorMessages.server, decription: desc };
};

exports.errorMessages = errorMessages;
exports.serverMessage500 = serverMessage500;
