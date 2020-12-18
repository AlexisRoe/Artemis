const { Router } = require("express");
const { find } = require("../../api/database");
const { errorMessages } = require("../../api/errorCodes");
const { buildDailyOverview } = require("../../utils/convertToDailyOverview");
const { createPeriodOfTime } = require("../../utils/createPeriodOfTime");
const isValidToken = require("../../authentication/isValidToken");

const router = Router();

router.get("/:timestamp", isValidToken, async (request, response) => {
  try {
    const timestamp = Number(request.params.timestamp);

    if (!Number.isInteger(timestamp)) {
      response.status(400).json(errorMessages.timestamp[400]);
      return;
    }

    const { startPeriod, endPeriod, timeNow } = createPeriodOfTime(timestamp);

    const result = await find(process.env.DB_COLLECTION_EVENTS, {
      $and: [{ start: { $gte: startPeriod } }, { end: { $lte: endPeriod } }],
    });

    if (!result.length) {
      response.status(404).json(errorMessages.timestamp[404]);
      return;
    }

    response.json({ code: 200, content: buildDailyOverview(result, timeNow) });
  } catch (error) {
    response.status(500).json({ ...errorMessages.server, desc: error.message });
  }
});

module.exports = router;
