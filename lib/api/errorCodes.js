const errorMessages = {
  authorization: {
    400: { code: 400, message: "transmitted data corrupted" },
    401: { code: 401, message: "invalid authorization token" },
    404: { code: 404, message: "User not found for the submitted id" },
  },
  timestamp: {
    400: { code: 400, message: "invalid timestamp submitted" },
    404: { code: 404, message: "no events found today" },
  },
  event: {
    400: { code: 400, message: "no valid objectId submitted" },
    404: { code: 404, message: "no events found today" },
  },
  server: {
    code: 500,
    message: "an internal server error accured",
  },
};

exports.errorMessages = errorMessages;
