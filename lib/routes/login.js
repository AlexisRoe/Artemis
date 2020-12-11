const jwt = require("jsonwebtoken");
const { Router } = require("express");
const { findOne } = require("../api/database");
const { errorMessages } = require("../api/errorCodes");
const extractIDandPasswort = require("../authentication/extractIDandPassword");
const isValidHeader = require("../authentication/isValidHeader");

const router = Router();

router.get("/login", isValidHeader, async (request, response) => {
  const EXPIRATION_DATE = 604800;
  try {
    const { id, password } = extractIDandPasswort(
      request.headers.authorization
    );

    const result = await findOne(process.env.DB_COLLECTION_USER, {
      $or: [{ employeeID: id }, { name: id }, { email: id }],
    });

    if (!result) {
      response.status(404).json(errorMessages.login[404]);
      return;
    }

    if (result.password !== password) {
      response.status(401).json(errorMessages.login[401]);
      return;
    }

    const auth_token = jwt.sign(
      { id: result._id, name: result.name },
      process.env.TOKEN_SECRET,
      {
        expiresIn: `${EXPIRATION_DATE}s`,
      }
    );

    const auth_response = {
      code: 200,
      message: "validation successful",
      user: {
        name: result.name,
      },
    };

    response.setHeader(
      "Set-Cookie",
      `auth_token=${auth_token};path=/api;Max-Age=${EXPIRATION_DATE}`
    );

    response.json(auth_response);
  } catch (error) {
    response
      .status(500)
      .json({ ...errorMessages.server, decription: error.message });
  }
});

module.exports = router;
