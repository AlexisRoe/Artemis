const jwt = require("jsonwebtoken");
const { errorMessages } = require("../api/errorCodes");
const { findOne } = require("../api/database");
const { ObjectID } = require("mongodb");

async function isValidToken(request, response, next) {
  try {
    const { auth_token } = request.cookies;

    if (!auth_token) {
      return response.status(401).send(errorMessages.authorization[401]);
    }

    const { id, name } = jwt.verify(auth_token, process.env.TOKEN_SECRET);

    if (!id || !name) {
      return response.status(401).send(errorMessages.authorization[401]);
    }

    const result = await findOne(process.env.DB_COLLECTION_USER, {
      _id: new ObjectID.createFromHexString(id),
    });

    if (!result) {
      response.status(401).send(errorMessages.authorization[401]);
      return;
    }

    next();
  } catch (error) {
    response
      .status(500)
      .json({ ...errorMessages.server, decription: error.message });
  }
}

module.exports = isValidToken;
