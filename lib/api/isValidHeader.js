const { errorMessages } = require("./errorCodes");

function isValidHeader(request, response, next) {
  const authorizationHeader = request.headers.authorization;

  if (typeof authorizationHeader === "undefined") {
    response.status(401).json(errorMessages.authorization[401]);
    return;
  }

  const buff = Buffer.from(authorizationHeader.split(" ")[1], "base64");
  const [id, password] = buff.toString("utf-8").split(":");

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
}

module.exports = isValidHeader;
