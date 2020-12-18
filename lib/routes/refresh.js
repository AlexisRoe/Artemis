const jwt = require("jsonwebtoken");
const { Router } = require("express");
const { findOne } = require("../api/database");
const { errorMessages } = require("../api/errorCodes");
const { ObjectID } = require("mongodb");
const router = Router();

router.get("/", async (request, response) => {
  try {
    const { auth_token } = request.cookies;

    if (!auth_token) {
      response.status(401).json({
        ...errorMessages.authorization[401],
        description: "no auth token submitted",
      });
      return;
    }

    const { id, name } = jwt.verify(auth_token, process.env.TOKEN_SECRET);

    if (!id || !name) {
      response.status(401).json({
        ...errorMessages.authorization[401],
        description: "id/name not included",
      });
      return;
    }

    const result = await findOne(process.env.DB_COLLECTION_USER, {
      _id: new ObjectID.createFromHexString(id),
    });

    if (!result) {
      response.status(404).json(errorMessages.authorization[404]);
      return;
    }

    if (result.auth_token !== auth_token) {
      response.status(401).json({
        ...errorMessages.authorization[401],
        description: "submitted jwt doesnt fit the stored one",
      });
      return;
    }

    const feedback = {
      code: 200,
      message: "refresh auth_token",
      user: {
        id: result._id,
        name: result.name,
        auth_token: result.auth_token,
      },
    };

    response.status(200).json(feedback);
  } catch (error) {
    response.status(500).json({ ...errorMessages.server, desc: error.message });
  }
});

module.exports = router;
