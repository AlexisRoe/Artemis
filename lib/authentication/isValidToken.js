const jwt = require("jsonwebtoken");
const { errorMessages } = require("../api/errorCodes");
const { findOne } = require("../api/database");
const { ObjectID } = require("mongodb");

async function isValidToken(request, response, next) {
  try {
    if (!request.cookies) {
      response.status(401).send({
        ...errorMessages.authorization[401],
        description: "no authorization cookie submitted",
      });
      return;
    }

    const { auth_token } = request.cookies;

    if (!auth_token) {
      response.status(401).send({
        ...errorMessages.authorization[401],
        description: "no auth token submitted",
      });
      return;
    }

    const { id, name } = jwt.verify(auth_token, process.env.TOKEN_SECRET);

    if (!id || !name) {
      response.status(401).send({
        ...errorMessages.authorization[401],
        description: "id/name not included",
      });
      return;
    }

    const result = await findOne(process.env.DB_COLLECTION_USER, {
      _id: new ObjectID.createFromHexString(id),
    });

    if (!result) {
      response.status(401).send({
        ...errorMessages.authorization[401],
        description: "no user identified",
      });
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
