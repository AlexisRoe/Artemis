const { Router } = require("express");
const { find } = require("../api/database");
const { errorMessages } = require("../api/errorCodes");
const { buildDailyOverview } = require("../utils/convertToDailyOverview");
const { createPeriodOfTime } = require("../utils/createPeriodOfTime");
const isValidToken = require("../authentication/isValidToken");

const router = Router();

router.get("/:timestamp", isValidToken, async (request, response) => {
  try {
    const date = Number(request.params.timestamp);

    if (!Number.isInteger(date)) {
      response.status(400).json(errorMessages.timestamp[400]);
      return;
    }

    const query = createPeriodOfTime(date);

    const result = await find(process.env.DB_COLLECTION_EVENTS, {
      $and: [{ start: { $lte: query.end } }, { start: { $gte: query.start } }],
    });

    if (result.length === 0) {
      response.status(404).json(errorMessages.timestamp[404]);
    }

    response.json(buildDailyOverview(result, query));
  } catch (error) {
    response
      .status(500)
      .json({ ...errorMessages.server, decription: error.message });
  }
});

module.exports = router;
