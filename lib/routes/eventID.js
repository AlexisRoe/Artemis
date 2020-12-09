const { Router } = require("express");
const { ObjectID } = require("mongodb");
const { find } = require("../api/database");
const { errorMessages } = require("../api/errorCodes");
const { createFunctionSheet } = require("../utils/convertToFunctionSheet");

const router = Router();

router.get("/api/event/:eventID", async (request, response) => {
  try {
    if (
      request.headers.authorization.split(" ")[1] !== process.env.AUTH_TOKEN
    ) {
      response.status(401).json(errorMessages.authorization[401]);
      return;
    }

    if (!ObjectID.isValid(request.params.eventID)) {
      response.status(400).json(errorMessages.event[400]);
      return;
    }

    const result = await find(process.env.DB_COLLECTION_EVENTS, {
      _id: new ObjectID.createFromHexString(request.params.eventID),
    });

    if (result.length === 0) {
      response.status(404).json(errorMessages.event[400]);
    }

    response.json(createFunctionSheet(result[0]));
  } catch (error) {
    response
      .status(500)
      .json({ ...errorMessages.server, decription: error.message });
  }
});

module.exports = router;
