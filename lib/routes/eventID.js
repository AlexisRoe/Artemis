const { Router } = require("express");
const { ObjectID } = require("mongodb");
const { findOne } = require("../api/database");
const { errorMessages } = require("../api/errorCodes");
const isValidToken = require("../authentication/isValidToken");
const { createFunctionSheet } = require("../utils/convertToFunctionSheet");

const router = Router();

router.get("/:eventID", isValidToken, async (request, response) => {
  try {
    if (!ObjectID.isValid(request.params.eventID)) {
      response.status(400).json(errorMessages.event[400]);
      return;
    }

    const result = await findOne(process.env.DB_COLLECTION_EVENTS, {
      _id: new ObjectID.createFromHexString(request.params.eventID),
    });

    if (!result) {
      response.status(404).json(errorMessages.event[400]);
    }

    response.json(createFunctionSheet(result));
  } catch (error) {
    response
      .status(500)
      .json({ ...errorMessages.server, decription: error.message });
  }
});

module.exports = router;
