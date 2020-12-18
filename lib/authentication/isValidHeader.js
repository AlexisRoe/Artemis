const { errorMessages } = require("../api/errorCodes");

function isValidHeader(request, response, next) {
  try {
    const { id, password } = request.body;

    if (!id) {
      response.status(400).json({
        ...errorMessages.authorization[400],
        desc: "no id included in the message, denied",
      });
      return;
    }

    if (!password) {
      response.status(400).json({
        ...errorMessages.authorization[400],
        desc: "no password included in the message, denied",
      });
      return;
    }

    if (typeof id != "string" || typeof password != "string") {
      response.status(400).json({
        ...errorMessages.authorization[400],
        desc: "id/passwort value have the wrong data type",
      });
      return;
    }

    next();
  } catch (error) {
    response.status(500).json({ ...errorMessages.server, desc: error.message });
  }
}

module.exports = isValidHeader;
