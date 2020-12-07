require("dotenv").config();
const { connect, setDB, findOne } = require("./lib/api/database");

// for mocking up the interface
const { sampleToday } = require("./lib/api/mockups");
const { errorMessages } = require("./lib/api/errorCodes");

const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 6000;

app.use(express.json());

app.get("/api/date/:date", async (request, response) => {
  try {
    let { date } = request.params;

    if (!date) {
      // create new Date as Unix timestamp
    }

    response.json(sampleToday);
  } catch (error) {
    response.status(500).json(errorMessages[500]);
  }
});

app.get("/api/login", async (request, response) => {
  try {
    const authorizationHeader = request.headers.authorization;
    const buff = Buffer.from(authorizationHeader.split(" ")[1], "base64");
    const { id, password } = JSON.parse(buff.toString("utf-8"));

    if (!id) {
      response.status(400).json({ code: 400, message: "UserID is missing" });
      return;
    }

    if (!password) {
      response.status(400).json({ code: 400, message: "password is missing" });
      return;
    }

    const result = await findOne(process.env.DB_COLLECTION_USER, {
      $or: [{ employeeID: id }, { name: id }, { email: id }],
    });

    if (!result) {
      response.status(404).json({ code: 404, message: "User not found" });
      return;
    }

    if (result.password !== password) {
      response
        .status(401)
        .json({ code: 401, message: "password validation failed" });
      return;
    }

    const auth_response = {
      code: 200,
      message: "validation successful",
      token: process.env.AUTH_TOKEN,
      user: {
        employeeID: result.employeeID,
        email: result.email,
        name: result.name,
      },
    };

    response.json(auth_response);
  } catch (error) {
    console.error(error);
    response.status(500).json(errorMessages[500]);
  }
});

// Heroku Deployment
app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);
app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Connection to database
async function run() {
  console.log("Connecting to database ...");
  await connect(process.env.DB_URL);
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

run();
