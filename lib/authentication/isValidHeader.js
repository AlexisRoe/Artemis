const { errorMessages } = require("../api/errorCodes");
const extractIDandPasswort = require("./extractIDandPassword");

function isValidHeader(request, response, next) {
  try {
    const authorizationHeader = request.headers.authorization;

    if (typeof authorizationHeader === "undefined") {
      response.status(401).json(errorMessages.authorization[401]);
      return;
    }

    const { id, password } = extractIDandPasswort(authorizationHeader);

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
