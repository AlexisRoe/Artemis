require("dotenv").config();
const express = require("express");
const path = require("path");
const { connect } = require("./lib/api/database");
const event = require("./lib/routes/eventID");
const overview = require("./lib/routes/overviewDay");
const login = require("./lib/routes/login");

const app = express();
const port = process.env.PORT || 6000;
app.use(express.json());

// TODO: construct middleware to protect routes

app.use("/api/event/:eventID", event);
app.use("/api/date/:timestamp", overview);
app.use("/api/login", login);

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
