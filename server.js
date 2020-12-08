require("dotenv").config();
const express = require("express");
const path = require("path");
const { connect, findOne, find } = require("./lib/api/database");
const { errorMessages, serverMessage500 } = require("./lib/api/errorCodes");
const { createTimeScale } = require("./lib/timeHandler/timestampConverter");
const { buildDailyOverview } = require("./lib/dataConverter/dailyOverview");

const app = express();
const port = process.env.PORT || 6000;
app.use(express.json());

// TODO: construct middleware to protect routes

app.get("/api/event/:eventID", async (request, response) => {
  try {
    const { eventID } = request.params;

    if (!eventID) {
      response.status(400).json({ code: 400, message: "no eventID submitted" });
      return;
    }

    const authorizationHeader = request.headers.authorization;
    const buff = Buffer.from(authorizationHeader.split(" ")[1], "base64");
    const auth_token = JSON.parse(buff.toString("utf-8"));

    if (auth_token !== process.env.TOKEN_SECRET) {
      response
        .status(401)
        .json({ code: 401, message: "invalid authorization token" });
      return;
    }

    const result = await find(process.env.DB_COLLECTION_EVENTS, {
      _id: eventID,
    });

    if (result.length === 0) {
      response
        .status(404)
        .json({ code: 404, message: "no events found today" });
    }

    // TODO: build the map for UI
    const event = {};

    response.json(event);
  } catch (error) {
    response.status(500).json(errorMessages[500]);
  }
});

app.get("/api/date/:timestamp", async (request, response) => {
  try {
    if (
      request.headers.authorization.split(" ")[1] !== process.env.AUTH_TOKEN
    ) {
      response.status(401).json(errorMessages.authorization[401]);
      return;
    }

    const date = Number(request.params.timestamp);

    if (!Number.isInteger(date)) {
      response.status(400).json(errorMessages.timestamp[400]);
      return;
    }

    const query = createTimeScale(date);
    const result = await find(process.env.DB_COLLECTION_EVENTS, {
      $and: [{ start: { $lte: query.end } }, { start: { $gte: query.start } }],
    });

    if (result.length === 0) {
      response.status(404).json(errorMessages.timestamp[404]);
    }

    const dailyOverview = buildDailyOverview(result, query);

    response.json(dailyOverview);
  } catch (error) {
    response.status(500).json(serverMessage500(error.message));
  }
});

app.get("/api/login", async (request, response) => {
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
    response.status(500).json(serverMessage500(error.message));
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

// server
async function run() {
  console.log("Connecting to database ...");
  await connect(process.env.DB_URL);
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

run();
