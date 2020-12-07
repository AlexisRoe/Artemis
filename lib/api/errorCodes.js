const errorMessages = {
  server: {
    500: {
      code: 500,
      message: "An internal server error accurred",
    },
  },
  login: {
    400: {
      id: { code: 400, message: "UserID is missing" },
      pwd: { code: 400, message: "password is missing" },
    },
    401: { code: 401, message: "password validation failed" },
    404: { code: 404, message: "User not found" },
  },
};

exports.errorMessages = errorMessages;
