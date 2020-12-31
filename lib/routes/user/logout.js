const jwt = require("jsonwebtoken");
const { Router } = require("express");
const { modifyUser } = require("../../api/database");
const { errorMessages } = require("../../api/errorCodes");
const { ObjectID } = require("mongodb");
const router = Router();

router.delete("/", async (request, response) => {
  console.log("logout ....");
  try {
    const { auth_token } = request.cookies;
    const { id } = jwt.verify(auth_token, process.env.TOKEN_SECRET);

    await modifyUser(
      process.env.DB_COLLECTION_USER,
      new ObjectID.createFromHexString(id),
      ""
    );

    response.clearCookie("auth_token");
    response.status(200).json({ code: 200, message: "logout successful" });
  } catch (error) {
    response.status(500).json({ ...errorMessages.server, desc: error.message });
  }
});

module.exports = router;
