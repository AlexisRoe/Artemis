const { Router } = require("express");
const { findOne } = require("../api/database");
const { errorMessages } = require("../api/errorCodes");

const router = Router();

router.get("/api/login", async (request, response) => {
  try {
    const authorizationHeader = request.headers.authorization;
    const buff = Buffer.from(authorizationHeader.split(" ")[1], "base64");
    const { id, password } = JSON.parse(buff.toString("utf-8"));

    if (!id) {
      response.status(400).json(errorMessages.login[400].id);
      return;
    }

    if (!password) {
      response.status(400).json(errorMessages.login[400].pwd);
      return;
    }

    const result = await findOne(process.env.DB_COLLECTION_USER, {
      $or: [{ employeeID: id }, { name: id }, { email: id }],
    });

    if (!result) {
      response.status(404).json(errorMessages.login[404]);
      return;
    }

    if (result.password !== password) {
      response.status(401).json(errorMessages.login[501]);
      return;
    }

    // TODO: replace fix TOKEN_SECRET with JSON Web Token
    // and store it on the server
    const auth_response = {
      code: 200,
      message: "validation successful",
      auth_token: process.env.AUTH_TOKEN,
      user: {
        employeeID: result.employeeID,
        email: result.email,
        name: result.name,
      },
    };

    response.json(auth_response);
  } catch (error) {
    console.error(error);
    response
      .status(500)
      .json({ ...errorMessages.server, decription: error.message });
  }
});

module.exports = router;
