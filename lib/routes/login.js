const jwt = require("jsonwebtoken");
const { Router } = require("express");
const { findOne } = require("../api/database");
const { errorMessages } = require("../api/errorCodes");
const isValidHeader = require("../authentication/isValidHeader");
const comparePasswords = require("../authentication/crypto");

const router = Router();
const EXPIRATION_DATE = 1000 * 60 * 60 * 24;

router.get("/login", isValidHeader, async (request, response) => {
  try {
    const { id, password } = request.body;

    const result = await findOne(process.env.DB_COLLECTION_USER, {
      $or: [{ employeeID: id }, { name: id }, { email: id }],
    });

    if (!result) {
      response.status(404).json(errorMessages.authorization[404]);
      return;
    }

    if (!(await comparePasswords(result.password, password))) {
      response.status(401).json({
        ...errorMessages.authorization[401],
        desc: "submitted password is not correct",
      });
      return;
    }

    const user = {
      id: result._id,
      name: result.name,
      uuid: result.uuid,
    };

    const auth_token = jwt.sign(user, process.env.TOKEN_SECRET, {
      expiresIn: `${EXPIRATION_DATE}s`,
    });

    const auth_response = {
      code: 200,
      message: "validation successful",
      user,
    };

    response.setHeader("Access-Control-Allow-Credentials", true);
    response.cookie("auth_token", `${auth_token}`, {
      path: "/",
      maxAge: EXPIRATION_DATE,
    });

    response.json(auth_response);
  } catch (error) {
    response.status(500).json({ ...errorMessages.server, desc: error.message });
  }
});

module.exports = router;
