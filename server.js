require("dotenv").config();
const { connect, setDB, findOne } = require("./lib/api/database");

// for mocking up the interface
const { sampleToday } = require("./lib/api/mockups");

const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 6000;

app.use(express.json());

app.get("/api/date/:date", async (request, response) => {
  const { date } = request.params;
  console.log(date);

  // for mocking api paths returning sampleToday
  // documents didnt exists yet

  try {
    response.json(sampleToday);
  } catch (error) {
    console.log(error);
    response.status(500).send("An internal server error accured");
  }
});

app.get("/api/user", async (request, response) => {
  // /api/user?user= & pwd=
  const user = request.query.user;

  try {
    setDB(process.env.DB_NAME);
    const result = await findOne(process.env.DB_COLLECTION_USER, {
      $or: [{ personalnr: user }, { name: user }, { email: user }],
    });

    if (!result) {
      response.status(404).send("Couldn´t find user");
      return;
    }

    if (result.password !== request.query.pwd) {
      response.status(401).send("Password incorrect");
      return;
    }

    const auth_response = {
      auth_token:
        "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.5b0YUvXu9IFCI4kqzNAfrnuA2lSMp8XtezIZTfQYH4k",
      user: {
        personalnr: result.personalnr,
        email: result.email,
        name: result.name,
      },
    };

    response.json(auth_response);
  } catch (error) {
    console.log(error);
    response.status(500).send("An internal server error accured");
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
