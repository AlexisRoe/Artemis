const { Router } = require("express");
const event = require("./documents/eventID");
const overview = require("./documents/overviewDay");

const router = Router();

router.use("/event", event);
router.use("/overview", overview);

module.exports = router;
