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
      response.status(400).json(errorMessages.login[400].id);
      return;
    }

    if (!password) {
      response.status(400).json(errorMessages.login[400].pwd);
      return;
    }

    if (typeof id != "string" || typeof password != "string") {
      response.status(400).json(errorMessages.login[400].format);
      return;
    }

    next();
  } catch (error) {
    response
      .status(500)
      .json({ ...errorMessages.server, decription: error.message });
  }
}

module.exports = isValidHeader;
